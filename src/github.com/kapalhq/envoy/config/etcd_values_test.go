package config

import (
	"fmt"
	"net/http"
	"reflect"
	"testing"

	"github.com/jteso/testify/assert"
	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/modprobe"
	"github.com/kapalhq/envoy/modules/params"
)

func TestHappyRead(t *testing.T) {
	// register the modules
	modprobe.Install("mod_mock", NewModMock)

	input := []byte(`
	{"id": "getping",
     "method": "GET",
     "enabled": true,
     "pattern": "/ping/:hola",
     "chain": [
  	    {"ref": "mod_mock", 
  	     "params": {
  	     	"optiona1": "a1", 
  	     	"optiona2": "a2"}},
	    {"ref": "mod_mock", 
	     "params": {
	     	"optiona1": "b1"}
	     }
	     ]
	}`)
	p, err := newProxyFromJson(input)
	assert.Nil(t, err)
	assert.Equal(t, p.GetId(), "getping")
	assert.Equal(t, p.GetMethod(), "GET")
	assert.Equal(t, p.IsEnabled(), true)
	assert.Equal(t, p.GetPattern(), "/ping/:hola")
	assert.Equal(t, len(p.GetChain().GetModules()), 2)

	modType := reflect.TypeOf(p.GetChain().GetModules()[0])

	fmt.Printf("All: %+v\n", modType)
	fmt.Printf("Name: %s\n", modType.Name())
	fmt.Printf("Pkg: %s\n", modType.PkgPath())

	fmt.Printf("Kind: %s\n", modType.Kind())
}

type ModMock struct {
	optional1 string
	optional2 string
}

func NewModMock(params params.ModuleParams) *ModMock {
	return &ModMock{
		optional1: params.GetStringOrDefault("optional1", ""),
		optional2: params.GetStringOrDefault("optional2", ""),
	}
}

func (a *ModMock) ProcessRequest(c context.ContextSpec) (*http.Response, error) {
	return nil, nil
}
func (a *ModMock) ProcessResponse(c context.ContextSpec) (*http.Response, error) {
	return nil, nil
}
