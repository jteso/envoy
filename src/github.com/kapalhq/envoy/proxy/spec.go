package proxy

import (
	"net/http"

	"github.com/kapalhq/envoy/chain"
	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/modules"
)

type ApiProxySpec interface {
	GetChain() chain.ChainSpec
	GetCursor() int
	InsertModAt(priority int, mod modules.ModuleSpec)
	AppendMod(mod modules.ModuleSpec)
	ProcessChain(ctx context.ContextSpec) (*http.Response, error)
}
