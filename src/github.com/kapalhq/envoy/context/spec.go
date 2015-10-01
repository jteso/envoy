package context

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/kapalhq/envoy/httputils"
)

// type Expandable interface {
// 	GetValue(key string) string
// }

// type Navigable interface {
// 	GetParent() Expandable
// 	SetParent(parent Expandable)
// }

// `Context` stores values shared during a request lifetime.
//  For example, a router can set variables extracted from the URL and later application handlers can access those values, or it //  can be used to store sessions values to be saved at the end of a request. There are several others common uses.
type ContextSpec interface {
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
