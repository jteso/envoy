package modules

import (
	"net/http"

	"github.com/kapalhq/envoy/context"
)

// Middlewares are allowed to observe, modify and intercept http requests and responses
type ModuleSpec interface {
	// Called before the request is going to be proxied to the endpoint selected by the load balancer.
	// If it returns an error, request will be treated as erorrneous (e.g. failover will be initated).
	// If it returns a non nil response, proxy will return the response without proxying to the endpoint.
	// If it returns nil response and nil error request will be proxied to the upstream.
	// It's ok to modify request headers and body as a side effect of the funciton call.
	ProcessRequest(c context.ContextSpec) (*http.Response, error)

	// If request has been completed or intercepted by middleware and response has been received
	// attempt would contain non nil response or non nil error.
	ProcessResponse(c context.ContextSpec) (*http.Response, error)
}
