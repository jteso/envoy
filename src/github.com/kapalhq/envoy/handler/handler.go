package handler

import (
	"io"
	"net"
	"net/http"
	"sync/atomic"

	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/errors"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/proxy"
)

type Options struct {
	// Takes a status code and formats it into proxy response
	ErrorFormatter errors.Formatter
}

type Handler struct {
	// Router selects a Proxy for a given request
	router *Router
	// Options like ErrorFormatter
	options *Options
	// Counter that is used to provide unique identifiers for requests
	lastRequestId int64
	// Internal logger
	logger *logutils.Logger
}

func New() *Handler {
	return &Handler{
		router: NewRouter(),
		logger: logutils.FileLogger,
	}
}

// func NewWithConfig(configFiles []Config) (*Handler, error) {
// 	apiHandler := &Handler{
// 		options: &Options{ErrorFormatter: &errors.JsonFormatter{}},
// 		router:  NewRouter(),
// 		logger:  logutils.FileLogger,
// 	}
// 	logutils.Info("Installing proxies...")
// 	for _, c := range configFiles {
// 		apiHandler.LoadProxies(c.GetProxies())
// 	}
// 	return apiHandler, nil
// }

// Accepts requests, send it through the pipeline and return the response to client.
func (c *Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if err := c.proxyRequest(w, r); err != nil {
		c.logger.Info("Error found: %s", err)
		c.replyError(err, w, r)
	}
}
func (c *Handler) GetLastRequestId() int64 {
	return c.lastRequestId
}

// Creates a proxy with a given router
//func NewHandler(router *Router) (*Handler, error) {
//	return NewHandlerWithOptions(router, Options{})
//}

func (p *Handler) GetRouter() *Router {
	return p.router
}

// Round trips the request to the selected proxy and writes back the response
func (p *Handler) proxyRequest(w http.ResponseWriter, r *http.Request) error {
	// Lookup the Proxy registered for the given pair: method, path.
	// FIXME: @javier - need to use the params variable as well
	proxy, _, _ := p.GetRouter().Lookup(r.Method, r.URL.Path)
	if proxy == nil {
		p.logger.Warn("Handler failed to route: %s ", r.URL.Path)
		return errors.FromStatus(http.StatusBadGateway)
	}

	// Create a unique request with sequential ids that will be passed to all interfaces.
	fctx := context.NewFlowContext(r, w, atomic.AddInt64(&p.lastRequestId, 1), nil)

	// The roundtrip thru the whole pipeline of modules
	response, err := proxy.ProcessChain(fctx)

	// Preparing the response back to the client if applicable
	if response != nil {
		httputils.CopyHeaders(w.Header(), response.Header)
		w.WriteHeader(response.StatusCode)
		if response.Body == nil {
			logutils.FileLogger.Warn("Empty body contained on the response")
		} else {
			io.Copy(w, response.Body)
			defer response.Body.Close()
		}
		return nil
	} else {
		return err
	}
}

// replyError is a helper function that takes error and replies with HTTP compatible error to the client.
func (p *Handler) replyError(err error, w http.ResponseWriter, req *http.Request) {
	proxyError := convertError(err)
	statusCode, body, contentType := p.options.ErrorFormatter.Format(proxyError)

	w.Header().Set("Content-Type", contentType)
	w.WriteHeader(statusCode)
	w.Write(body)
}

func (c *Handler) AddProxy(p proxy.ApiProxySpec) {
	c.GetRouter().Register(p)
}

func (c *Handler) LoadProxies(proxies []proxy.ApiProxySpec) {
	for _, p := range proxies {
		logutils.Info(" ** Proxy: `%s` installed", p.GetId())
		c.AddProxy(p)
	}
}

func validateOptions(o Options) (Options, error) {
	if o.ErrorFormatter == nil {
		o.ErrorFormatter = &errors.JsonFormatter{}
	}
	return o, nil
}

func convertError(err error) errors.ProxyError {
	switch e := err.(type) {
	case errors.ProxyError:
		return e
	case net.Error:
		if e.Timeout() {
			return errors.FromStatus(http.StatusRequestTimeout)
		}
	case *httputils.MaxSizeReachedError:
		return errors.FromStatus(http.StatusRequestEntityTooLarge)
	}
	return errors.FromStatus(http.StatusBadGateway)
}
