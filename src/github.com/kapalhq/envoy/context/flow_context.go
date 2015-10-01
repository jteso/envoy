package context

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gorilla/sessions"
	"github.com/kapalhq/envoy/httputils"
)

type FlowContextImpl struct {
	Id           int64
	HttpRequest  *http.Request
	HttpResponse *http.Response
	Writer       http.ResponseWriter

	Error error
	Body  httputils.MultiReader

	userData      map[string]interface{}
	userDataMutex *sync.RWMutex
}

func Empty() ContextSpec {
	return &FlowContextImpl{}
}

func NewFlowContext(r *http.Request, w http.ResponseWriter, id int64, body httputils.MultiReader) ContextSpec {
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
