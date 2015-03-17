// Package router implements a simple URL pattern muxer
// Heavily influenced by: https://github.com/bmizerany/pat/blob/master/mux.go
package core

import (
	"net/url"
	"strings"
	"sync"
)

// Router is an HTTP request multiplexer. It matches the URL of each
// incoming request against a list of registered patterns with their associated
// methods and calls the handler for the pattern that most closely matches the
// URL.
//
// Pattern matching attempts each pattern in the order in which they were
// registered.
//
// Patterns may contain literals or captures. Capture names start with a colon
// and consist of letters A-Z, a-z, _, and 0-9. The rest of the pattern
// matches literally. The portion of the URL matching each name ends with an
// occurrence of the character in the pattern immediately following the name,
// or a /, whichever comes first. It is possible for a name to match the empty
// string.
//
// Example pattern with one capture:
//   /hello/:name
// Will match:
//   /hello/blake
//   /hello/keith
// Will not match:
//   /hello/blake/
//   /hello/blake/foo
//   /foo
//   /foo/bar
//
// Example 2:
//    /hello/:name/
// Will match:
//   /hello/blake/
//   /hello/keith/foo
//   /hello/blake
//   /hello/keith
// Will not match:
//   /foo
//   /foo/bar
//
// A pattern ending with a slash will get an implicit redirect to it's
// non-slash version.  For example: Get("/foo/", handler) will implicitly
// register Get("/foo", handler). You may override it by registering
// Get("/foo", anotherhandler) before the slash version.
//
// Retrieve the capture from the r.URL.Query().Get(":name") in a handler (note
// the colon). If a capture name appears more than once, the additional values
// are appended to the previous values (see
// http://golang.org/pkg/net/url/#Values)
//
// A trivial example server is:
//
//	package main
//
//	import (
//		"io"
//		"net/http"
//		"github.com/bmizerany/pat"
//		"log"
//	)
//
//	// hello world, the web server
//	func HelloServer(w http.ResponseWriter, req *http.Request) {
//		io.WriteString(w, "hello, "+req.URL.Query().Get(":name")+"!\n")
//	}
//
//	func main() {
//		m := pat.New()
//		m.Get("/hello/:name", http.HandlerFunc(HelloServer))
//
//		// Register this pat with the default serve mux so that other packages
//		// may also be exported. (i.e. /debug/pprof/*)
//		http.Handle("/", m)
//		err := http.ListenAndServe(":12345", nil)
//		if err != nil {
//			log.Fatal("ListenAndServe: ", err)
//		}
//	}
//
// When "Method Not Allowed":
//
// Pat knows what methods are allowed given a pattern and a URI. For
// convenience, Router will add the Allow header for requests that
// match a pattern for a method other than the method requested and set the
// Status to "405 Method Not Allowed".

type Router struct {
	middlewares map[string][]*routerEntry
	mutex       *sync.RWMutex
}

// New returns a new Router.
func NewRouter() *Router {
	return &Router{
		middlewares: make(map[string][]*routerEntry),
		mutex:       new(sync.RWMutex),
	}
}

// Lookup by id. Used for API purposes only
func (r *Router) LookupById(id string) (m Middleware, found bool) {
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	methods := []string{"GET", "POST", "PUT", "DELETE"}
	for _, m := range methods {
		for _, re := range r.middlewares[m] {
			if re.Middleware.GetId() == id {
				return re.Middleware, true
			}
		}
	}
	return nil, false

}

func (r *Router) GetAllIds() []string {
	collectIds := make([]string,0)
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	methods := []string{"GET", "POST", "PUT", "DELETE"}
	for _, m := range methods {
		for _, re := range r.middlewares[m] {
			collectIds = append(collectIds, re.Middleware.GetId())
		}
	}
	return collectIds

}

// Lookup returns the middleware assigned to that method and path.
// If not found it will return ok == nil
func (r *Router) Lookup(method, path string) (Middleware, url.Values, bool) {
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	for _, re := range r.middlewares[method] {
		if params, ok := re.try(path); ok {
			return re.Middleware, params, ok
		}
	}

	return nil, nil, false
}

func (r *Router) Register(met, pat string, m Middleware) {
	r.Add(strings.ToUpper(met), pat, m)
}

func (r *Router) Unregister(met, pat string) {
	if r.middlewares[met] != nil {
		for i, re := range r.middlewares[met] {
			if re.GetPath() == pat {
				r.mutex.Lock()
				defer r.mutex.Unlock()
				//remove the element in the `i` position
				r.middlewares[met] = append(r.middlewares[met][:i], r.middlewares[met][i+1:]...) // (1,2,...,i,...n)~>(1,2,..,i-1,i+1,...n)
			}
		}
	}
	return
}

// Head will register a pattern with a handler for HEAD requests.
func (r *Router) HEAD(pat string, m Middleware) {
	r.Add("HEAD", pat, m)
}

// Get will register a pattern with a handler for GET requests.
// It also registers pat for HEAD requests. If this needs to be overridden, use
// Head before Get with pat.
func (r *Router) GET(pat string, m Middleware) {
	r.Add("HEAD", pat, m)
	r.Add("GET", pat, m)
}

// Post will register a pattern with a handler for POST requests.
func (r *Router) POST(pat string, m Middleware) {
	r.Add("POST", pat, m)
}

// Put will register a pattern with a handler for PUT requests.
func (r *Router) PUT(pat string, m Middleware) {
	r.Add("PUT", pat, m)
}

// Del will register a pattern with a handler for DELETE requests.
func (r *Router) DELETE(pat string, m Middleware) {
	r.Add("DELETE", pat, m)
}

// Options will register a pattern with a handler for OPTIONS requests.
func (r *Router) OPTIONS(pat string, m Middleware) {
	r.Add("OPTIONS", pat, m)
}

// Add will register a pattern with a handler for meth requests.
func (r *Router) Add(meth, pat string, m Middleware) {
	r.mutex.Lock()
	defer r.mutex.Unlock()
	r.middlewares[meth] = append(r.middlewares[meth], &routerEntry{pat, m})
}

// Tail returns the trailing string in path after the final slash for a pat ending with a slash.
//
// Examples:
//
//	Tail("/hello/:title/", "/hello/mr/mizerany") == "mizerany"
//	Tail("/:a/", "/x/y/z")                       == "y/z"
//
func Tail(pat, path string) string {
	var i, j int
	for i < len(path) {
		switch {
		case j >= len(pat):
			if pat[len(pat)-1] == '/' {
				return path[i:]
			}
			return ""
		case pat[j] == ':':
			var nextc byte
			_, nextc, j = match(pat, isAlnum, j+1)
			_, _, i = match(path, matchPart(nextc), i)
		case path[i] == pat[j]:
			i++
			j++
		default:
			return ""
		}
	}
	return ""
}

type routerEntry struct {
	pat        string
	Middleware Middleware
}

func (r *routerEntry) GetPath() string {
	return r.pat
}

func (r *routerEntry) try(path string) (url.Values, bool) {
	m := make(url.Values)
	var i, j int
	for i < len(path) {
		switch {
		case j >= len(r.pat):
			if r.pat != "/" && len(r.pat) > 0 && r.pat[len(r.pat)-1] == '/' {
				return m, true
			}
			return nil, false
		case r.pat[j] == ':':
			var name, val string
			var nextc byte
			name, nextc, j = match(r.pat, isAlnum, j+1)
			val, _, i = match(path, matchPart(nextc), i)
			m.Add(":"+name, val)
		case path[i] == r.pat[j]:
			i++
			j++
		default:
			return nil, false
		}
	}
	if j != len(r.pat) {
		return nil, false
	}
	return m, true
}

func matchPart(b byte) func(byte) bool {
	return func(c byte) bool {
		return c != b && c != '/'
	}
}

func match(s string, f func(byte) bool, i int) (matched string, next byte, j int) {
	j = i
	for j < len(s) && f(s[j]) {
		j++
	}
	if j < len(s) {
		next = s[j]
	}
	return s[i:j], next, j
}

func isAlra(ch byte) bool {
	return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || ch == '_'
}

func isDigit(ch byte) bool {
	return '0' <= ch && ch <= '9'
}

func isAlnum(ch byte) bool {
	return isAlra(ch) || isDigit(ch)
}
