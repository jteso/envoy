package proxy

import (
	"net/http"

	"github.com/kapalhq/envoy/chain"
	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/logutils"
)

type Proxy interface {
	GetId() string
	GetMethod() string
	IsEnabled() bool
	GetPattern() string
	GetChain() chain.ChainSpec
	RoundTrip(req context.ContextSpec) (*http.Response, error)
}

type BaseProxy struct {
	Id      string
	Method  string
	Enabled bool
	Pattern string
	Chain   chain.ChainSpec

	Logger *logutils.Logger
}

func New(id, method, pattern string, enabled bool, chain chain.ChainSpec) *BaseProxy {
	return &BaseProxy{
		Id:      id,
		Method:  method,
		Pattern: pattern,
		Enabled: enabled,
		Chain:   chain,
		Logger:  logutils.FileLogger,
	}
}

func (b *BaseProxy) GetId() string {
	return b.Id
}

func (b *BaseProxy) GetMethod() string {
	return b.Method
}

func (b *BaseProxy) IsEnabled() bool {
	return b.Enabled
}
func (b *BaseProxy) GetChain() chain.ChainSpec {
	return b.Chain
}

func (b *BaseProxy) GetPattern() string {
	return b.Pattern
}

func (mid *BaseProxy) RoundTrip(ctx context.ContextSpec) (*http.Response, error) {
	return mid.GetChain().Process(ctx)
}
