// Based on the work below:
// (a) http://www.gorillatoolkit.org/pkg/sessions
// (b) https://github.com/martini-contrib/sessions
//
// It creates/retrieves a new session and inject it into the http context via `userData`
// Usage:
// [session]
// type = cookie_store //redis_store, filesystem_store
// secret = secret123
//
// CHANGELOG.md - implement and test other stores: redis(martini), filesystem(gorilla),...

package sessions

import (
	"net/http"

	"github.com/gorilla/sessions"
	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
)

type SessionModule struct {
	Store sessions.Store
}

func NewSession(params core.ModuleParams) *SessionModule {
	sessionType := params.GetString("type")
	secretStore := params.GetString("secret")

	if sessionType == "cookie_store" {
		return &SessionModule{
			Store: sessions.NewCookieStore([]byte(secretStore)),
		}
	} else {
		panic("Other modules other than cookie store have not been implemented yet.")
	}
}

func (sm *SessionModule) ProcessRequest(ctx core.FlowContext) (*http.Response, error) {
	session, err := sm.Store.Get(ctx.GetHttpRequest(), "session")

	if err != nil {
		return nil, err
	}

	ctx.SetSession(session)
	return nil, nil
}

func (sm *SessionModule) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	session, found := c.GetSession()
	if found == false {
		logutils.FileLogger.Warn("Session has not been found in the context.")
	}
	err := session.Save(c.GetHttpRequest(), c.GetResponseWriter())
	if err != nil {
		logutils.FileLogger.Warn("Problem found while saving session values into the store")
	}
	return nil, nil
}

func init() {
	core.Register("sessions", NewSession)
}
