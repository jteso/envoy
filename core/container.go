package core

import (
	"io"
	"net"
	"net/http"
	"sync/atomic"

	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/httputils"
	"github.com/jteso/envoy/logutils"
)

type Options struct {
	// Takes a status code and formats it into proxy response
	ErrorFormatter errors.Formatter
}

type ContainerSpec interface {
	Expandable
	Navigable
	GetRouter() *Router
	ServeHTTP(http.ResponseWriter, *http.Request)
	GetLastRequestId() int64
}

type Container struct {
	// Router selects a Proxy for a given request
	router *Router
	// Options like ErrorFormatter
	options *Options
	// Counter that is used to provide unique identifiers for requests
	lastRequestId int64
	// Internal logger
	logger *logutils.Logger

	parent Expandable
}

// Accepts requests, send it through the pipeline and return the response to client.
func (c *Container) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if err := c.proxyRequest(w, r); err != nil {
		c.logger.Info("Error found: %s", err)
		c.replyError(err, w, r)
	}
}
func (c *Container) GetLastRequestId() int64 {
	return c.lastRequestId
}

func NewContainer(configFiles []Config) (*Container, error) {
	cntnr := &Container{
		options: &Options{ErrorFormatter: &errors.JsonFormatter{}},
		router:  NewRouter(),
		logger:  logutils.FileLogger,
	}
	logutils.Info("Installing middlewares...")
	for _, c := range configFiles {
		cntnr.LoadMiddlewares(c.GetMiddlewares())
	}
	return cntnr, nil
}

// Creates a proxy with a given router
//func NewContainer(router *Router) (*Container, error) {
//	return NewContainerWithOptions(router, Options{})
//}

func (p *Container) GetRouter() *Router {
	return p.router
}

// Round trips the request to the selected proxy and writes back the response
func (p *Container) proxyRequest(w http.ResponseWriter, r *http.Request) error {
	// Lookup the middleware registered for the given pair: method, path.
	// FIXME: @javier - need to use the params variable as well
	middleware, _, _ := p.GetRouter().Lookup(r.Method, r.URL.Path)
	if middleware == nil {
		p.logger.Warn("Container failed to route: %s ", r.URL.Path)
		return errors.FromStatus(http.StatusBadGateway)
	}

	// Create a unique request with sequential ids that will be passed to all interfaces.
	fctx := NewFlowContext(r, w, atomic.AddInt64(&p.lastRequestId, 1), nil)
	fctx.SetParent(middleware)

	// The roundtrip thru the whole pipeline of modules
	response, err := middleware.RoundTrip(fctx)

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
func (p *Container) replyError(err error, w http.ResponseWriter, req *http.Request) {
	middlewareError := convertError(err)
	statusCode, body, contentType := p.options.ErrorFormatter.Format(middlewareError)

	w.Header().Set("Content-Type", contentType)
	w.WriteHeader(statusCode)
	w.Write(body)
}

func (c *Container) AddMiddleware(p Middleware) {
	c.GetRouter().Register(p.GetMethod(), p.GetPattern(), p)
}

func (c *Container) LoadMiddlewares(mds []Middleware) {
	for _, m := range mds {
		logutils.Info(" ** Middleware: `%s` installed", m.GetId())
		m.SetParent(c)
		c.AddMiddleware(m)
	}
}

func (c Container) GetValue(key string) string {
	// Lookup for whole key
	if funcr, ok := HttpContainerResolvers[key]; ok {
		return funcr(&c, "")
	}
	// Drop off last part of the key, in case it contains a non-static value
	subkey, param := splitKeyParam(key)

	if funcr, ok := HttpContainerResolvers[subkey]; ok {
		return funcr(&c, param)
	}

	if c.GetParent() == nil {
		return ""
	} else {
		// continue the lookup thru the parent context, or returns "" in case of rootContext (no parentContext available)
		return c.GetParent().GetValue(key)
	}
}

func (c Container) GetParent() Expandable {
	return c.parent
}

func (c *Container) SetParent(e Expandable) {
	c.parent = e
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
