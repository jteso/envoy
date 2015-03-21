package core

import (
	"net/http"

	"fmt"

	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/logutils"
)

type Proxy interface {
	Expandable
	Navigable
	GetId() string
	GetMethod() string
	IsEnabled() bool
	GetPattern() string
	GetAttachedPolicy() *Policy
	RoundTrip(req FlowContext) (*http.Response, error)
}

type BaseProxy struct {
	Id             string
	Method         string
	Enabled        bool
	Pattern        string
	AttachedPolicy *Policy

	Logger *logutils.Logger
	parent Expandable
	//DB          	dao.MiddlewareDB

}

func NewProxy(id, method, pattern string, enabled bool, policy *Policy, p Expandable) *BaseProxy {
	return &BaseProxy{
		Id:             id,
		Method:         method,
		Pattern:        pattern,
		Enabled:        enabled,
		AttachedPolicy: policy,
		Logger:         logutils.FileLogger,
		parent:         p,
		//DB:             dao.NewSQLiteDB(true),
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
func (b *BaseProxy) GetAttachedPolicy() *Policy {
	return b.AttachedPolicy
}

func (b *BaseProxy) GetPattern() string {
	return b.Pattern
}

func (b *BaseProxy) GetParent() Expandable {
	return b.parent
}

func (b *BaseProxy) SetParent(e Expandable) {
	b.parent = e
}

func (mid *BaseProxy) RoundTrip(ctx FlowContext) (*http.Response, error) {
	mws := mid.GetAttachedPolicy().ModuleChain.ModuleWrappers

	var resp *http.Response
	var err error

	for i, mw := range mws {
		resp, err = mw.GetModule().ProcessRequest(ctx)
		ctx.SetHttpResponse(resp)
		ctx.SetError(err)

		if resp != nil || err != nil {
			mid.unwind(i, ctx)
			return ctx.GetHttpResponse(), ctx.GetError()
		}
	}
	logutils.FileLogger.Error(fmt.Sprintf("No policy attached to Proxy: %s", mid.GetAttachedPolicy().Name))
	return nil, errors.FromStatus(http.StatusNoContent)

}

// Unwind pipeline from the `i` position downstream
func (m *BaseProxy) unwind(pin int, ctx FlowContext) {
	mws := m.GetAttachedPolicy().ModuleChain.ModuleWrappers
	for i := pin; i >= 0; i-- {
		resp, err := mws[i].GetModule().ProcessResponse(ctx)
		if resp != nil {
			ctx.SetHttpResponse(resp)
		}
		if err != nil {
			ctx.SetError(err)
		}
	}
}

func (m BaseProxy) GetValue(key string) string {
	// Lookup for whole key
	if funcr, ok := ProxyCtxResolvers[key]; ok {
		return funcr(&m, "")
	}
	// Drop off last part of the key, in case it contains a non-www value
	subkey, param := splitKeyParam(key)

	if funcr, ok := ProxyCtxResolvers[subkey]; ok {
		return funcr(&m, param)
	}

	if m.GetParent() == nil {
		return ""
	} else {
		// continue the lookup thru the parent context, or returns "" in case of rootContext (no parentContext available)
		return m.GetParent().GetValue(key)
	}
}
