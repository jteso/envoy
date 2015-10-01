/*
* Invokes any http endpoint.
* TODO(javier): To add loadbalancing strategies
 */

package mod_http_lb

import (
	"net/http"
	"net/url"

	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/modprobe"
	"github.com/kapalhq/envoy/modules/params"
)

const (
	ROUND_ROBIN_STRATEGY = "round_robin"
)

func init() {
	modprobe.Install("mod_http_lb", NewHttpLoadbalancer)
}

type HttpLoadbalancer struct {
	strategy string
	url      *url.URL
}

// ---
// CONSTRUCTORS
// ---

func NewHttpLoadbalancer(params params.ModuleParams) *HttpLoadbalancer {
	strategyParsed := sanitizePolicy(params.GetStringOrDefault("strategy", ROUND_ROBIN_STRATEGY))
	urlParsed := mustParseUrl(params.GetString("url"))
	return &HttpLoadbalancer{
		strategy: strategyParsed,
		url:      urlParsed,
	}
}

// ---
// INTERFACE
// ---
func sanitizePolicy(strategy string) string {
	switch strategy {
	case ROUND_ROBIN_STRATEGY:
		return strategy
	default:
		logutils.FileLogger.Debug("Policy:%s unknown", strategy)
		panic("Error loading strategy. See logs for further details.")
	}
}

func mustParseUrl(in string) *url.URL {
	url, err := httputils.ParseUrl(in)
	if err != nil {
		panic(err)
	}
	return url
}

func (a *HttpLoadbalancer) ProcessRequest(req context.ContextSpec) (*http.Response, error) {
	// None of the modules in the pipeline has intercepted the request, so lets hit the endpoint now!
	// TODO: - Transport should be configurable via options
	//       - HTTP Header to be added: `X-Forwarded-Host`

	// Note that we rewrite request each time we proxy it to the
	// endpoint, so that each try gets a fresh start
	req.SetHttpRequest(copyRequest(req.GetHttpRequest(), req.GetBody(), a.url))

	return http.DefaultTransport.RoundTrip(req.GetHttpRequest())
}

func (a *HttpLoadbalancer) ProcessResponse(c context.ContextSpec) (*http.Response, error) {
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
