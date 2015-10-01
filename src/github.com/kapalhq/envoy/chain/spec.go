package chain

import (
	"net/http"

	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/modules"
)

type ChainSpec interface {
	SetCursor(current int)
	GetCursor() int

	SetModules([]modules.ModuleSpec)
	GetModules() []modules.ModuleSpec
	AppendModule(mod modules.ModuleSpec)
	InsertModule(i int, mod modules.ModuleSpec)

	Process(ctx context.ContextSpec) (*http.Response, error)
}
