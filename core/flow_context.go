package core

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gorilla/sessions"
	"github.com/jteso/envoy/httputils"
)

// `Context` stores values shared during a request lifetime.
//  For example, a router can set variables extracted from the URL and later application handlers can access those values, or it //  can be used to store sessions values to be saved at the end of a request. There are several others common uses.
type FlowContext interface {
	Expandable
	Navigable

	GetId() int64 // Request id that is unique to this running process

	GetHttpRequest() *http.Request // Original http request
	SetHttpRequest(*http.Request)  // Can be used to set http request

	GetResponseWriter() http.ResponseWriter // Original http responseWriter
	SetResponseWriter(http.ResponseWriter)  // Can be used to set http responseWriter

	GetHttpResponse() *http.Response
	SetHttpResponse(*http.Response)

	GetError() error
	SetError(error)

	SetBody(httputils.MultiReader)  // Sets request body
	GetBody() httputils.MultiReader // Request body fully read and stored in effective manner (buffered to disk for large requests)

	SetUserData(key string, baton interface{})  // Provide storage space for data that survives with the request
	GetUserData(key string) (interface{}, bool) // Fetch user data set from previously SetUserData call
	GetAllUserData() map[string]interface{}
	DeleteUserData(key string) // Clean up user data set from previously SetUserData call

	SetSession(*sessions.Session)
	GetSession() (*sessions.Session, bool)

	String() string // Debugging string representation of the request
}

type FlowContextImpl struct {
	Id           int64
	HttpRequest  *http.Request
	Writer       http.ResponseWriter
	HttpResponse *http.Response

	Error error
	Body  httputils.MultiReader

	userDataMutex *sync.RWMutex
	userData      map[string]interface{}

	parent Expandable
}

func NewFlowContext(r *http.Request, w http.ResponseWriter, id int64, body httputils.MultiReader) FlowContext {
	return &FlowContextImpl{
		HttpRequest:   r,
		Writer:        w,
		Id:            id,
		Body:          body,
		userDataMutex: &sync.RWMutex{},
	}
}

func (ctx *FlowContextImpl) String() string {
	return fmt.Sprintf("Request(id=%d, method=%s, url=%s)", ctx.Id, ctx.HttpRequest.Method, ctx.HttpRequest.URL.String())
}

func (ctx *FlowContextImpl) GetHttpRequest() *http.Request {
	return ctx.HttpRequest
}

func (ctx *FlowContextImpl) SetHttpRequest(r *http.Request) {
	ctx.HttpRequest = r
}

func (ctx *FlowContextImpl) GetResponseWriter() http.ResponseWriter {
	return ctx.Writer
}

func (ctx *FlowContextImpl) SetResponseWriter(w http.ResponseWriter) {
	ctx.Writer = w
}

func (ctx *FlowContextImpl) GetHttpResponse() *http.Response {
	return ctx.HttpResponse
}

func (ctx *FlowContextImpl) SetHttpResponse(r *http.Response) {
	ctx.HttpResponse = r
}

func (ctx *FlowContextImpl) GetError() error {
	return ctx.Error
}

func (ctx *FlowContextImpl) SetError(e error) {
	ctx.Error = e
}

func (ctx *FlowContextImpl) GetId() int64 {
	return ctx.Id
}

func (ctx *FlowContextImpl) SetBody(b httputils.MultiReader) {
	ctx.Body = b
}

func (ctx *FlowContextImpl) GetBody() httputils.MultiReader {
	return ctx.Body
}

func (ctx *FlowContextImpl) SetUserData(key string, baton interface{}) {
	ctx.userDataMutex.Lock()
	defer ctx.userDataMutex.Unlock()
	if ctx.userData == nil {
		ctx.userData = make(map[string]interface{})
	}
	ctx.userData[key] = baton
}

func (ctx *FlowContextImpl) GetUserData(key string) (i interface{}, b bool) {
	ctx.userDataMutex.RLock()
	defer ctx.userDataMutex.RUnlock()
	if ctx.userData == nil {
		return i, false
	}
	i, b = ctx.userData[key]
	return i, b
}

func (ctx *FlowContextImpl) GetAllUserData() map[string]interface{} {
	ctx.userDataMutex.RLock()
	defer ctx.userDataMutex.RUnlock()
	return ctx.userData
}

func (ctx *FlowContextImpl) DeleteUserData(key string) {
	ctx.userDataMutex.Lock()
	defer ctx.userDataMutex.Unlock()
	if ctx.userData == nil {
		return
	}

	delete(ctx.userData, key)
}

func (ctx *FlowContextImpl) GetSession() (session *sessions.Session, found bool) {
	s, f := ctx.GetUserData("_session")
	if f {
		return s.(*sessions.Session), true
	}
	return s.(*sessions.Session), f
}

func (ctx *FlowContextImpl) SetSession(session *sessions.Session) {
	ctx.SetUserData("_session", session)
}

func GetSessionValue(s *sessions.Session, key string) interface{} {
	return s.Values[key]
}

func SetSessionValue(s *sessions.Session, key string, value interface{}) {
	s.Values[key] = value
}

func (ctx FlowContextImpl) GetParent() Expandable {
	return ctx.parent
}
func (ctx *FlowContextImpl) SetParent(pe Expandable) {
	ctx.parent = pe
}

func (ctx FlowContextImpl) GetValue(key string) string {
	// Lookup for whole key
	if funcr, ok := flowCtxResolvers[key]; ok {
		return funcr(&ctx, "")
	}
	// Drop off last part of the key, in case it contains a non-static value
	subkey, param := splitKeyParam(key)

	if funcr, ok := flowCtxResolvers[subkey]; ok {
		return funcr(&ctx, param)
	}

	if ctx.GetParent() == nil {
		return ""
	} else {
		// continue the lookup thru the parent context, or returns "" in case of rootContext (no parentContext available)
		return ctx.GetParent().GetValue(key)
	}
}
