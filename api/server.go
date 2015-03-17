package api

import (
	"log"
	"net/http"
	"regexp"
	"strings"

	"github.com/go-martini/martini"
	"github.com/jteso/envoy/core"
)

// The regex to check for the requested format (allows an optional trailing
// slash).
var rxExt = regexp.MustCompile(`(\.(?:xml|text|json))\/?$`)

// MapEncoder intercepts the request's URL, detects the requested format,
// and injects the correct encoder dependency for this request. It rewrites
// the URL to remove the format extension, so that routes can be defined
// without it.
func MapEncoder(c martini.Context, w http.ResponseWriter, r *http.Request) {
	// Get the format extension
	matches := rxExt.FindStringSubmatch(r.URL.Path)
	ft := ".json"
	if len(matches) > 1 {
		// Rewrite the URL without the format extension
		l := len(r.URL.Path) - len(matches[1])
		if strings.HasSuffix(r.URL.Path, "/") {
			l--
		}
		r.URL.Path = r.URL.Path[:l]
		ft = matches[1]
	}
	// Inject the requested encoder
	switch ft {
	case ".xml":
		c.MapTo(xmlEncoder{}, (*Encoder)(nil))
		w.Header().Set("Content-Type", "application/xml")
	case ".text":
		c.MapTo(textEncoder{}, (*Encoder)(nil))
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	default:
		c.MapTo(jsonEncoder{}, (*Encoder)(nil))
		w.Header().Set("Content-Type", "application/json")
	}
}

// Run will run a web api for the container passed by parameter
func Run(ngn *core.Engine) {
	m := martini.New()

	// Setup middleware
	m.Use(MapEncoder)

	// Setup routes
	r := martini.NewRouter()

	r.Get(`/http/middlewares`, GetAllMiddlewares)
	r.Get(`/http/middlewares/:mid`, GetMiddleware)
	//r.Get(`/http/middleware/:mid/executions`, GetMiddlewareExecutions)
	//r.Get(`/http/middleware/execution/:id`, GetMiddlewareExecution)

	// Inject database & container
	m.MapTo(ngn, (*core.EnvoyAPI)(nil))

	// Add the router action
	m.Action(r.Handle)

	if err := http.ListenAndServe(":9090", m); err != nil {
		log.Fatal(err)
	}
}
