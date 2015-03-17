package http_endpoint_test

import (
	"net/http"

	"bytes"
	"io/ioutil"

	"github.com/jteso/envoy/core"
)

type TestEndpoint struct {
	Id string
}

// ---
// CONSTRUCTORS
// ---

func NewTestEndpoint(params core.ModuleParams) *TestEndpoint {
	return &TestEndpoint{}
}

func (a *TestEndpoint) ProcessRequest(req core.FlowContext) (*http.Response, error) {
	return &http.Response{
		StatusCode: http.StatusOK,
		Body:       ioutil.NopCloser(bytes.NewReader([]byte("Test Response"))),
	}, nil
}

func (a *TestEndpoint) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func init() {
	core.Register("test_endpoint", NewTestEndpoint)
}
