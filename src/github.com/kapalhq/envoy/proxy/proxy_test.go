package proxy

import (
	"net/http"
	"testing"

	"github.com/jteso/testify/assert"
	"github.com/kapalhq/envoy/chain"
	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/modules"
)

func TestHappyProxy(t *testing.T) {
	proxy := New("testProxy", "GET", "/ping", true, getMockChain())
	resp, err := proxy.RoundTrip(context.Empty())
	assert.Nil(t, err)
	assert.Equal(t, resp.StatusCode, 200)
}

func getMockChain() chain.ChainSpec {
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

	chain := chain.New()
	chain.AppendModule(modMock1)
	chain.AppendModule(modMock2)
	return chain
}
