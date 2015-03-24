/*
* Invokes any http endpoint.
* TODO - loadbalancing capabilities
 */

package http_endpoint

import (
	"fmt"
	"net/http"
	"net/url"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/httputils"
)

type HttpEndpoint struct {
	url *url.URL
	id  string
}

// ---
// CONSTRUCTORS
// ---

func NewHttpEndpoint(params core.ModuleParams) *HttpEndpoint {
	return mustParseUrl(params.GetString("url"))
}

// ---
// INTERFACE
// ---

func mustParseUrl(in string) *HttpEndpoint {
	url, err := httputils.ParseUrl(in)
	if err != nil {
		panic(err)
	}
	return &HttpEndpoint{
		url: url,
		id:  fmt.Sprintf("%s://%s", url.Scheme, url.Host),
	}
}

func (a *HttpEndpoint) ProcessRequest(req core.FlowContext) (*http.Response, error) {
	// None of the modules in the pipeline has intercepted the request, so lets hit the endpoint now!
	// FIXME: @javier - Transport should be configurable via options
	// FIXME: @javier - HTTP Header to be added: `X-Forwarded-Host`

	// Note that we rewrite request each time we proxy it to the
	// endpoint, so that each try gets a fresh start
	req.SetHttpRequest(copyRequest(req.GetHttpRequest(), req.GetBody(), a.url))

	return http.DefaultTransport.RoundTrip(req.GetHttpRequest())
}

func (a *HttpEndpoint) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

// Adds all the headers and change the  url to point to the endpoint.
func copyRequest(req *http.Request, body httputils.MultiReader, endpointURL *url.URL) *http.Request {
	outReq := new(http.Request)
	*outReq = *req // includes shallow copies of maps, but we handle this below

	// Set the body to the enhanced body that can be re-read multiple times and buffered to disk
	outReq.Body = body

	outReq.URL.Scheme = endpointURL.Scheme
	outReq.URL.Host = endpointURL.Host
	outReq.URL.Opaque = req.RequestURI
	// raw query is already included in RequestURI, so ignore it to avoid dupes
	outReq.URL.RawQuery = ""

	outReq.Proto = "HTTP/1.1"
	outReq.ProtoMajor = 1
	outReq.ProtoMinor = 1

	// Overwrite close flag so we can keep persistent connection for the backend servers
	outReq.Close = false

	outReq.Header = make(http.Header)
	httputils.CopyHeaders(outReq.Header, req.Header)
	return outReq
}

func init() {
	core.Register("http_router", NewHttpEndpoint)
}
