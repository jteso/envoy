package chain

import (
	"net/http"
	"testing"

	"github.com/jteso/testify/assert"
	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/modules"
)

func TestHappyProcessChain(t *testing.T) {
	OnRequest1Fn := func(ctx context.ContextSpec) (*http.Response, error) {
		return nil, nil
	}
	OnResponse1Fn := func(ctx context.ContextSpec) (*http.Response, error) {
		return nil, nil
	}

	OnRequest2Fn := func(ctx context.ContextSpec) (*http.Response, error) {
		return httputils.NewTextResponse(nil, 200, "happy life"), nil
	}
	OnResponse2Fn := func(ctx context.ContextSpec) (*http.Response, error) {
		return nil, nil
	}

	modMock1 := modules.NewWithParams("mod_mock_1", OnRequest1Fn, OnResponse1Fn)
	modMock2 := modules.NewWithParams("mod_mock_2", OnRequest2Fn, OnResponse2Fn)

	chain := New()
	chain.AppendModule(modMock1)
	chain.AppendModule(modMock2)

	assert.Equal(t, len(chain.GetModules()), 2)

	resp, err := chain.Process(context.Empty())

	assert.Nil(t, err)
	assert.Equal(t, resp.StatusCode, 200)
}
