package config

import (
	"fmt"

	"io/ioutil"
	"path"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
	yaml "github.com/tsuru/config"
)

//var log = logutils.New(logutils.ConsoleFilter)

type ApiConfig struct {
	Basedir     string
	Policies    map[string]*core.Policy
	Middlewares []core.Middleware
}

func (ac ApiConfig) GetBaseDir() string {
	return ac.Basedir
}

func (ac ApiConfig) GetPolicies() map[string]*core.Policy {
	return ac.Policies
}
func (ac ApiConfig) GetMiddlewares() []core.Middleware {
	return ac.Middlewares
}

func getKeySilently(key string) string {
	value, err := yaml.GetString(key)
	if err != nil {
		panic("Error while parsing key: " + key + " due to " + err.Error())
	}
	return value
}

func parseBaseDir() string {
	return getKeySilently("basedir")
}

func parsePolicies() map[string]*core.Policy {
	policymap := make(map[string]*core.Policy)
	policiesRaw, err := yaml.Get("policies")
	if err != nil {
		panic("Error parsing policies")
	}
	var policy *core.Policy
	for k, v := range policiesRaw.(map[interface{}]interface{}) {
		policy = createPolicy(k.(string), v.([]interface{})) // policyName, [map[access:map[allow:192.168.1.0, :::1 deny:*]] map[log:map[userdata:[user age]]]
		policymap[fmt.Sprintf("$%s", policy.Name)] = policy
	}

	return policymap
}

func parseMiddlewares() []core.Middleware {
	lmiddlewares := make([]core.Middleware, 0)

	middlewaresRaw, err := yaml.Get("middlewares")
	if err != nil {
		panic("Error parsing middlewares")
	}

	for k, v := range middlewaresRaw.(map[interface{}]interface{}) {
		m := parseMiddleware(k.(string), v)
		lmiddlewares = append(lmiddlewares, m)
	}
	return lmiddlewares
}

func createPolicy(policyName string, moduleChain []interface{}) *core.Policy {
	policy := core.NewPolicy(policyName)
	for _, v := range moduleChain {
		switch v.(type) {
		//case value is a variable pointing to another policy
		case string:
			modwin := core.NewEmptyModuleWrapper()
			modwin.SetName(v.(string))
			policy.AppendModuleWrapper(modwin)
		case map[interface{}]interface{}:
			for modName, modParams := range v.(map[interface{}]interface{}) {
				modwin := core.NewModuleWrapper(modName.(string),
					core.ToModuleParams(modParams.(map[interface{}]interface{})))
				policy.AppendModuleWrapper(modwin)
			}
		}
	}
	return policy
}

func createModuleParams(m interface{}) map[string]interface{} {
	params := make(map[string]interface{})
	for k, v := range m.(map[interface{}]interface{}) {
		params[k.(string)] = v
	}
	return params
}

func parseMiddleware(midname string, v interface{}) core.Middleware {
	var name, method, pattern string
	var enabled bool
	var policy *core.Policy

	name = midname
	for k, v := range v.(map[interface{}]interface{}) {
		switch k.(string) {
		case "pattern":
			pattern = v.(string)
		case "method":
			method = v.(string)
		case "enabled":
			enabled = v.(bool)
		case "policy":
			policy = createPolicy(fmt.Sprint(name, "_policy"), v.([]interface{}))
		}
	}
	return core.NewMiddleware(name, method, pattern, enabled, policy, nil)
}

// Expand the declared policy variables embeded into the middlewares
func expandPolicies(apiConfig *ApiConfig) {
	for _, mid := range apiConfig.Middlewares {
		var policyName string
		for k, mw := range mid.GetAttachedPolicy().ModuleChain.ModuleWrappers {
			if mw.IsReference() {
				policyName = mw.GetName()
				pn := apiConfig.Policies[policyName]
				if pn == nil {
					logutils.Error(fmt.Sprintf("Policy not found: %s", policyName))
					panic("Middleware cannot be installed as policy does not seem to exist")
				}
				mid.GetAttachedPolicy().InsertPolicyModules(k, pn)
			}
		}
	}
}

func parseConfig() (error, *ApiConfig) {
	config := &ApiConfig{
		Basedir:     parseBaseDir(),
		Policies:    parsePolicies(),
		Middlewares: parseMiddlewares(),
	}
	expandPolicies(config)
	return nil, config
}

func ParseFile(configFile string) (error, *ApiConfig) {
	if err := yaml.ReadConfigFile(configFile); err != nil {
		return err, nil
	}
	return parseConfig()
}

func Parse(configFile []byte) (error, *ApiConfig) {
	if err := yaml.ReadConfigBytes(configFile); err != nil {
		return err, nil
	}
	return parseConfig()
}

func GetConfFilesInPath(confPath string) []core.Config {
	output := make([]core.Config, 0)
	files, _ := ioutil.ReadDir(confPath)
	for _, f := range files {
		if strings.HasSuffix(f.Name(), "-conf.yaml") {
			logutils.Info(" ** Parsing config file: `%s`...", f.Name())
			err, conf := ParseFile(path.Join(confPath, f.Name()))
			if err != nil {
				panic("Error due to " + err.Error())
			}
			output = append(output, conf)
		}
	}
	return output
}
