package chain

import (
	"log"
	"net/http"

	"github.com/kapalhq/envoy/errors"

	"github.com/kapalhq/envoy/context"
)

func ProcessChain(chain ChainSpec, ctx context.ContextSpec) (*http.Response, error) {
	for stateHandler := upstreamFn; stateHandler != nil; {
		stateHandler = stateHandler(chain, ctx)
	}
	return ctx.GetHttpResponse(), ctx.GetError()
}

// agentStateFn represents the state of an agent as a function
// that returns the next state
type handleStateFn func(ChainSpec, context.ContextSpec) handleStateFn

func upstreamFn(chain ChainSpec, ctx context.ContextSpec) handleStateFn {
	mods := chain.GetModules()
	for i, mod := range mods {
		resp, err := mod.ProcessRequest(ctx)
		chain.SetCursor(i)
		if resp != nil {
			log.Printf("Module: %s writing response ...", mods[i].GetId())
			ctx.SetHttpResponse(resp)
			return downstreamFn
		}
		if err != nil {
			log.Printf("Module: %s found error ...", mods[i].GetId())
			ctx.SetError(err)
			return errorFoundFn
		}
	}
	log.Printf("Error. At least one module must to respond")
	ctx.SetError(errors.FromStatus(http.StatusNoContent))
	return errorFoundFn
}

func downstreamFn(chain ChainSpec, ctx context.ContextSpec) handleStateFn {
	mods := chain.GetModules()
	pin := chain.GetCursor()
	for i := pin; i >= 0; i-- {
		resp, err := mods[i].ProcessResponse(ctx)
		if resp != nil {
			log.Printf("Module: %s writing response ...", mods[i].GetId())
			ctx.SetHttpResponse(resp)
		}
		if err != nil {
			ctx.SetError(err)
		}
	}
	return finishedFn
}

func finishedFn(chain ChainSpec, ctx context.ContextSpec) handleStateFn {
	log.Println("Finished successfully")
	return nil
}

func errorFoundFn(chain ChainSpec, ctx context.ContextSpec) handleStateFn {
	//TODO(javier): add some logging here
	log.Println("Finished with errors")
	return nil
}
