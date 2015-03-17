package core

import (
	"net/http"

	"fmt"

	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/logutils"
)

type Middleware interface {
	Expandable
	Navigable
	GetId() string
	GetMethod() string
	IsEnabled() bool
	GetPattern() string
	GetAttachedPolicy() *Policy
	RoundTrip(req FlowContext) (*http.Response, error)
}

type BaseMiddleware struct {
	Id             string
	Method         string
	Enabled        bool
	Pattern        string
	AttachedPolicy *Policy

	Logger *logutils.Logger
	parent Expandable
	//DB          	dao.MiddlewareDB

}

func NewMiddleware(id, method, pattern string, enabled bool, policy *Policy, p Expandable) *BaseMiddleware {
	return &BaseMiddleware{
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

func (b *BaseMiddleware) GetId() string {
	return b.Id
}

func (b *BaseMiddleware) GetMethod() string {
	return b.Method
}

func (b *BaseMiddleware) IsEnabled() bool {
	return b.Enabled
}
func (b *BaseMiddleware) GetAttachedPolicy() *Policy {
	return b.AttachedPolicy
}

func (b *BaseMiddleware) GetPattern() string {
	return b.Pattern
}

func (b *BaseMiddleware) GetParent() Expandable {
	return b.parent
}

func (b *BaseMiddleware) SetParent(e Expandable) {
	b.parent = e
}

func (mid *BaseMiddleware) RoundTrip(ctx FlowContext) (*http.Response, error) {
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
	logutils.FileLogger.Error(fmt.Sprintf("No policy attached to middleware: %s", mid.GetAttachedPolicy().Name))
	return nil, errors.FromStatus(http.StatusNoContent)

}

// Unwind pipeline from the `i` position downstream
func (m *BaseMiddleware) unwind(pin int, ctx FlowContext) {
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

func (m BaseMiddleware) GetValue(key string) string {
	// Lookup for whole key
	if funcr, ok := MiddlewareCtxResolvers[key]; ok {
		return funcr(&m, "")
	}
	// Drop off last part of the key, in case it contains a non-static value
	subkey, param := splitKeyParam(key)

	if funcr, ok := MiddlewareCtxResolvers[subkey]; ok {
		return funcr(&m, param)
	}

	if m.GetParent() == nil {
		return ""
	} else {
		// continue the lookup thru the parent context, or returns "" in case of rootContext (no parentContext available)
		return m.GetParent().GetValue(key)
	}
}
