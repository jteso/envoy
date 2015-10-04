package config

import (
	"encoding/json"

	"github.com/kapalhq/envoy/chain"
	"github.com/kapalhq/envoy/modprobe"
	"github.com/kapalhq/envoy/modules/params"
	"github.com/kapalhq/envoy/proxy"
	"github.com/mitchellh/mapstructure"
)

type ApiProxyChainEtcdValue struct {
	Ref    string
	Params map[string]interface{}
}

type ApiProxyEtcdValue struct {
	Id      string
	Method  string
	Enabled bool
	Pattern string
	Chain   []ApiProxyChainEtcdValue
}

// Example of json
//  {"id": <string>,
//   "method": <string>,
//   "enabled": <bool>,
//   "pattern": <string>,
//   "chain": [
//   	{"ref": <string>, "params": {"key": <string>, "key2": <string>},
// 	    {"ref": <string>, "params": {"key": <string>}
//   ]
// }
func newProxyFromJson(valueAsJson []byte) (proxy.ApiProxySpec, error) {

	// convert to map[string] interface{}
	var input map[string]interface{}
	err := json.Unmarshal(valueAsJson, &input)
	if err != nil {
		return nil, err
	}
	//fmt.Printf("%+v\n", input)

	// convert to api struct
	var meta mapstructure.Metadata
	var result ApiProxyEtcdValue
	config := &mapstructure.DecoderConfig{
		Metadata: &meta,
		Result:   &result,
	}
	decoder, _ := mapstructure.NewDecoder(config)
	errD := decoder.Decode(input)
	if errD != nil {
		return nil, errD
	}

	ch := chain.New()
	for _, mod := range result.Chain {
		ch.AppendModule(modprobe.Find(mod.Ref, params.ModuleParams(mod.Params)))
	}

	p := proxy.New(result.Id, result.Method, result.Pattern, result.Enabled, ch)

	// fmt.Printf("Unused keys: %#v\n", meta.Unused)
	// fmt.Printf("id: %s\n", result.Id)
	// fmt.Printf("method: %s\n", result.Method)
	// fmt.Printf("enabled: %t\n", result.Enabled)
	// fmt.Printf("pattern: %s\n", result.Pattern)
	// fmt.Printf("chain: %+v\n", result.Chain)

	return p, nil
}
