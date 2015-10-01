// Package router implements a simple URL pattern muxer
// Modified version from original: https://github.com/bmizerany/pat/blob/master/mux.go
package handler

import (
	"net/url"
	"strings"
	"sync"

	"github.com/kapalhq/envoy/proxy"
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

var HTTP_METHODS = [...]string{"GET", "HEAD", "POST", "PUT", "DELETE", "TRACE", "OPTIONS", "CONNECT", "PATCH"}

type Router struct {
	proxies map[string][]proxy.ApiProxySpec
	mutex   *sync.RWMutex
}

// New returns a new Router.
func NewRouter() *Router {
	return &Router{
		proxies: make(map[string][]proxy.ApiProxySpec),
		mutex:   new(sync.RWMutex),
	}
}

// Lookup by id. Used for API purposes only
func (r *Router) LookupById(id string) (m proxy.ApiProxySpec, found bool) {
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	for _, m := range HTTP_METHODS {
		for _, p := range r.proxies[m] {
			if p.GetId() == id {
				return p, true
			}
		}
	}
	return nil, false

}

func (r *Router) GetAllIds() []string {
	collectIds := make([]string, 0)
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	for _, m := range HTTP_METHODS {
		for _, p := range r.proxies[m] {
			collectIds = append(collectIds, p.GetId())
		}
	}
	return collectIds

}

// Lookup returns the proxy assigned to that method and path.
// If not found it will return ok == nil
func (r *Router) Lookup(method, path string) (proxy.ApiProxySpec, url.Values, bool) {
	r.mutex.RLock()
	defer r.mutex.RUnlock()

	for _, p := range r.proxies[method] {
		if params, ok := try(p.GetPattern(), path); ok {
			return p, params, ok
		}
	}

	return nil, nil, false
}

func (r *Router) Register(p proxy.ApiProxySpec) {
	r.Add(strings.ToUpper(p.GetMethod()), p)
}

func (r *Router) Unregister(unprox proxy.ApiProxySpec) {
	met := unprox.GetMethod()
	if r.proxies[met] != nil {
		for i, p := range r.proxies[met] {
			if p.GetPattern() == unprox.GetPattern() {
				r.mutex.Lock()
				defer r.mutex.Unlock()
				//remove the element in the `i` position
				r.proxies[met] = append(r.proxies[met][:i], r.proxies[met][i+1:]...) // (1,2,...,i,...n)~>(1,2,..,i-1,i+1,...n)
			}
		}
	}
	return
}

// Head will register a pattern with a handler for HEAD requests.
func (r *Router) HEAD(p proxy.ApiProxySpec) {
	r.Add("HEAD", p)
}

// Get will register a pattern with a handler for GET requests.
// It also registers pat for HEAD requests. If this needs to be overridden, use
// Head before Get with pat.
func (r *Router) GET(p proxy.ApiProxySpec) {
	r.Add("HEAD", p)
	r.Add("GET", p)
}

// Post will register a pattern with a handler for POST requests.
func (r *Router) POST(p proxy.ApiProxySpec) {
	r.Add("POST", p)
}

// Put will register a pattern with a handler for PUT requests.
func (r *Router) PUT(p proxy.ApiProxySpec) {
	r.Add("PUT", p)
}

// Del will register a pattern with a handler for DELETE requests.
func (r *Router) DELETE(p proxy.ApiProxySpec) {
	r.Add("DELETE", p)
}

// Options will register a pattern with a handler for OPTIONS requests.
func (r *Router) OPTIONS(p proxy.ApiProxySpec) {
	r.Add("OPTIONS", p)
}

// Add will register a pattern with a handler for meth requests.
func (r *Router) Add(met string, p proxy.ApiProxySpec) {
	r.mutex.Lock()
	defer r.mutex.Unlock()
	r.proxies[met] = append(r.proxies[met], p)
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

func try(pattern string, path string) (url.Values, bool) {
	m := make(url.Values)
	var i, j int
	for i < len(pattern) {
		switch {
		case j >= len(pattern):
			if pattern != "/" && len(pattern) > 0 && pattern[len(pattern)-1] == '/' {
				return m, true
			}
			return nil, false
		case pattern[j] == ':':
			var name, val string
			var nextc byte
			name, nextc, j = match(pattern, isAlnum, j+1)
			val, _, i = match(path, matchPart(nextc), i)
			m.Add(":"+name, val)
		case path[i] == pattern[j]:
			i++
			j++
		default:
			return nil, false
		}
	}
	if j != len(pattern) {
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
