package modprobe

//
// Based on https://bitbucket.org/mikespook/golib/src/27c65cdf8a772c737c9f4d14c0099bb82ee7fa35/funcmap/funcmap.go?at=default
//
import (
	"errors"
	"fmt"
	"reflect"

	"github.com/kapalhq/envoy/modules"
	"github.com/kapalhq/envoy/modules/params"
)

var (
	ErrParamsNotAdapted = errors.New("The number of params is not adapted.")
)

var Funcs = make(map[string]reflect.Value, 10)

// All the modules will have to register themselves using this method, in the init()
func Install(name string, fn interface{}) {
	// todo: clean in case of error with defer()
	v := reflect.ValueOf(fn)
	v.Type().NumIn()
	Funcs[name] = v
	return
}

func Find(name string, params params.ModuleParams) modules.ModuleSpec {
	value, _ := call(Funcs, name, params)
	if len(value) == 0 {
		panic(fmt.Sprintf("Module: `%s` cannot be found. Have you registered it?", name))
	}
	return value[0].Interface().(modules.ModuleSpec)
}

func call(m map[string]reflect.Value, name string, params ...interface{}) (result []reflect.Value, err error) {
	if _, ok := m[name]; !ok {
		err = errors.New(name + " does not exist.")
		return
	}
	if len(params) != m[name].Type().NumIn() {
		err = ErrParamsNotAdapted
		return
	}
	in := make([]reflect.Value, len(params))
	for k, param := range params {
		in[k] = reflect.ValueOf(param)
	}
	result = m[name].Call(in)
	return
}
