package core

import (
	"net/http"

	"strconv"
	"strings"
)

type ModuleParams map[string]interface{}

func ToModuleParams(m map[interface{}]interface{}) ModuleParams {
	mtmp := NewModuleParams()

	for k, v := range m {
		mtmp[k.(string)] = v
	}

	return mtmp
}
func ToModuleParamsInt(m int) ModuleParams {
	return NewModuleParams()

}

func NewModuleParams() ModuleParams {
	return make(map[string]interface{})
}

func (m ModuleParams) GetInt(key string) int {
	value := m[strings.ToLower(key)]

	switch value.(type) {
	case string:
		if i, err := strconv.Atoi(value.(string)); err != nil {
			return i
		}
	default:
		return value.(int)
	}

	panic("Error found while getting the value of the parameter: " + key)
}

func (m ModuleParams) GetIntOrDefault(key string, defaultValue int) int {
	value, ok := m[strings.ToLower(key)]
	if ok == false {
		return defaultValue
	}
	switch value.(type) {
	case string:
		if i, err := strconv.Atoi(value.(string)); err != nil {
			return i
		}
	default:
		return value.(int)
	}

	panic("Error found while getting the value of the parameter: " + key)
}

func (m ModuleParams) GetBool(key string) bool {
	b, err := strconv.ParseBool(key)
	if err != nil {
		//todo - it may be wiser to fail silently here
		panic("Error parsing the key:" + key + "to bool")
	}
	return b
}

func (m ModuleParams) GetBoolOrDefault(key string, defaultValue bool) bool {
	b, err := strconv.ParseBool(key)
	if err != nil {
		return defaultValue
	}
	return b
}

func (m ModuleParams) GetString(key string) string {
	return m[strings.ToLower(key)].(string)
}

func (m ModuleParams) GetStringOrDefault(key string, defaultValue string) string {
	value, ok := m[strings.ToLower(key)].(string)
	if ok == false {
		return defaultValue
	}
	return value
}

func (m ModuleParams) GetStringArray(key string, separator string) []string {
	values := strings.Split(m[strings.ToLower(key)].(string), separator)
	for i, _ := range values {
		values[i] = strings.TrimSpace(values[i])
	}
	return values
}

func (m ModuleParams) GetStringArrayOrDefault(key string, separator string, defaultValue []string) []string {
	k, ok := m[strings.ToLower(key)]
	if ok == false {
		return defaultValue
	}
	values := strings.Split(k.(string), separator)
	for i, _ := range values {
		values[i] = strings.TrimSpace(values[i])
	}
	return values
}

func (m ModuleParams) GetArray(key string) (output []string) {
	for _, v := range (m[strings.ToLower(key)]).([]interface{}) {
		output = append(output, v.(string))
	}
	return output
}

func (m ModuleParams) GetArrayOrDefault(key string, defaultValue []string) (output []string) {
	k, ok := m[strings.ToLower(key)]
	if ok == false {
		return defaultValue
	}
	for _, v := range k.([]interface{}) {
		output = append(output, v.(string))
	}
	return output
}

// Middlewares are allowed to observe, modify and intercept http requests and responses
type Module interface {
	// Called before the request is going to be proxied to the endpoint selected by the load balancer.
	// If it returns an error, request will be treated as erorrneous (e.g. failover will be initated).
	// If it returns a non nil response, proxy will return the response without proxying to the endpoint.
	// If it returns nil response and nil error request will be proxied to the upstream.
	// It's ok to modify request headers and body as a side effect of the funciton call.
	ProcessRequest(c FlowContext) (*http.Response, error)

	// If request has been completed or intercepted by middleware and response has been received
	// attempt would contain non nil response or non nil error.
	ProcessResponse(c FlowContext) (*http.Response, error)
}

// Wraps the functions to create a middleware compatible interface
type BaseModule struct {
	Id         string
	OnRequest  func(c FlowContext) (*http.Response, error)
	OnResponse func(c FlowContext) (*http.Response, error)
}

func (bm BaseModule) ProcessRequest(c FlowContext) (*http.Response, error) {
	if bm.OnRequest != nil {
		return bm.OnRequest(c)
	}
	return nil, nil
}

func (bm BaseModule) ProcessResponse(c FlowContext) (*http.Response, error) {
	if bm.OnResponse != nil {
		return bm.OnResponse(c)
	}
	return nil, nil
}

func NewExpandableModule(variable string) *BaseModule {
	return &BaseModule{Id: variable}
}
func NewModule() Module {
	return &BaseModule{}
}
