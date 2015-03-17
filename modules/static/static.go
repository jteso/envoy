package static

import (
	"bytes"
	"io/ioutil"
	"net/http"
	"net/http/httptest"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/httputils"
)

type Static struct {
}

func NewStatic(params core.ModuleParams) *Static {
	return &Static{}
}

func (static *Static) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	resp := &http.Response{
		Header: make(http.Header),
	}
	resRecorder := httptest.NewRecorder()
	http.ServeFile(resRecorder, c.GetHttpRequest(), c.GetHttpRequest().URL.Path[1:])

	httputils.CopyHeaders(resp.Header, resRecorder.Header())
	resp.StatusCode = http.StatusOK
	resp.Body = ioutil.NopCloser(bytes.NewReader(resRecorder.Body.Bytes()))

	return resp, nil
}

func (static *Static) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func init() {
	core.Register("static", NewStatic)
}
