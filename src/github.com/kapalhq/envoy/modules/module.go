package modules

import (
	"net/http"

	"github.com/kapalhq/envoy/context"
)

// Wraps the functions to create a middleware compatible interface
type BaseModule struct {
	Id         string
	OnRequest  func(c context.ContextSpec) (*http.Response, error)
	OnResponse func(c context.ContextSpec) (*http.Response, error)
}

func NewModule() ModuleSpec {
	return &BaseModule{}
}

func NewWithParams(id string,
	onReq func(c context.ContextSpec) (*http.Response, error),
	onRes func(c context.ContextSpec) (*http.Response, error)) ModuleSpec {

	return &BaseModule{
		Id:         id,
		OnRequest:  onReq,
		OnResponse: onRes,
	}
}

func (bm BaseModule) GetId() string {
	return bm.Id
}

func (bm BaseModule) ProcessRequest(c context.ContextSpec) (*http.Response, error) {
	if bm.OnRequest != nil {
		return bm.OnRequest(c)
	}
	return nil, nil
}

func (bm BaseModule) ProcessResponse(c context.ContextSpec) (*http.Response, error) {
	if bm.OnResponse != nil {
		return bm.OnResponse(c)
	}
	return nil, nil
}

func NewExpandableModule(variable string) *BaseModule {
	return &BaseModule{Id: variable}
}
