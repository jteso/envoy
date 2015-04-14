package config

import (
	"fmt"

	"io/ioutil"
	"path"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
	yaml "github.com/tsuru/config"
	"reflect"
)

//var log = logutils.New(logutils.ConsoleFilter)

type ApiConfig struct {
	Basedir  string
	Policies map[string]*core.Policy
	Proxies  []core.Proxy
}

func (ac ApiConfig) GetBaseDir() string {
	return ac.Basedir
}

func (ac ApiConfig) GetPolicies() map[string]*core.Policy {
	return ac.Policies
}
func (ac ApiConfig) GetProxies() []core.Proxy {
	return ac.Proxies
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

func parseProxies() []core.Proxy {
	lProxies := []core.Proxy{}

	ProxiesRaw, err := yaml.Get("proxies")
	if err != nil {
		panic("Error parsing Proxies")
	}

	for k, v := range ProxiesRaw.(map[interface{}]interface{}) {
		p := parseProxy(k.(string), v)
		lProxies = append(lProxies, p...)
	}
	return lProxies
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

func parseProxy(midname string, v interface{}) []core.Proxy {
	proxies := []core.Proxy{}
	var name, pattern string
	var verbs []string
	var enabled bool
	var policy *core.Policy


	name = midname
	for k, v := range v.(map[interface{}]interface{}) {
		switch k.(string) {
		case "pattern":
			pattern = v.(string)
		case "method":
			verbs = parseMethod(v)
		case "enabled":
			enabled = v.(bool)
		case "policy":
			policy = createPolicy(fmt.Sprint(name, "_policy"), v.([]interface{}))
		}
	}
	for _,verb := range verbs{
		proxies = append(proxies, core.NewProxy(name + "_" + verb, verb, pattern, enabled, policy, nil ))
	}
	return proxies
}

// Parse the method field and return an array of HTTP verbs
func parseMethod(method interface{}) (ms []string){
	verbs := []string{}
	switch method.(type){
	case string:
		return append(verbs, method.(string))
	case []interface{}:
		for _,v := range method.([] interface {}){
			verbs = append(verbs, v.(string))
		}
		return verbs
	default:
		logutils.FileLogger.Error("Error parsing the method: %+v due to unxpected type: %s", method, reflect.TypeOf(method))
		panic("Error parsing the config file. Check your logs")
	}

}

// Expand the declared policy variables embeded into the Proxies
func expandPolicies(apiConfig *ApiConfig) {
	for _, mid := range apiConfig.Proxies {
		var policyName string
		for k, mw := range mid.GetAttachedPolicy().ModuleChain.ModuleWrappers {
			if mw.IsReference() {
				policyName = mw.GetName()
				pn := apiConfig.Policies[policyName]
				if pn == nil {
					logutils.Error(fmt.Sprintf("Policy not found: %s", policyName))
					panic("Proxy cannot be installed as policy does not seem to exist")
				}
				mid.GetAttachedPolicy().InsertPolicyModules(k, pn)
			}
		}
	}
}

func parseConfig() (error, *ApiConfig) {
	config := &ApiConfig{
		Basedir:  parseBaseDir(),
		Policies: parsePolicies(),
		Proxies:  parseProxies(),
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
