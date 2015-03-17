// https://console.developers.google.com/project/jteso-labs/apiui/credential

// api: GET /admin
// pipeline: access; oauth2(id, secret, /admin/callback); http(http://host1:9999/jbossas/services/admin)

// a new middleware should be created automatically like:
// api: GET /admin/callback
// pipeline: access;oauth2(....); http(....)

package oauth2

import (
	"net/http"

	"encoding/json"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/errors"
	goauth2 "github.com/jteso/oauth2"
)

var (
	KEY_TOKEN = "oauth2_token"
)

type OAuth2 struct {
	Options *goauth2.Options
}

func NewOAuth2(params core.ModuleParams) *OAuth2 {
	clientId := params.GetString("clientId")
	clientSecret := params.GetString("clientSecret")
	authURL := params.GetString("authURL")         // "https://accounts.google.com/o/oauth2/auth"
	tokenURL := params.GetString("tokenURL")       // "https://accounts.google.com/o/oauth2/token"
	redirectURL := params.GetString("redirectURL") // http://localhost:8080/oauth2callback
	scope := params.GetString("scope")             // https://www.googleapis.com/auth/userinfo.profile

	opts, err := goauth2.New(
		goauth2.Client(clientId, clientSecret),
		goauth2.RedirectURL(redirectURL),
		goauth2.Scope(scope),
		goauth2.Endpoint(authURL, tokenURL),
	)

	if err != nil {
		//CHANGELOG.md(jtedilla) do not panic
		panic("Problem found while trying to create the OAuth2 Opts")
	}
	return &OAuth2{
		Options: opts,
	}
}

func (oa *OAuth2) ProcessRequest(ctx core.FlowContext) (*http.Response, error) {
	// Find out if this request is coming from the resource owner (user) or the authorization server
	// This decision will be based on the presence or not of an authorization grant ('code')
	found, _ := isAuthorizationGrantPresent(ctx.GetHttpRequest())

	// --- Authorization Server is knocking the door ---//
	if found {
		// This is a callback from the authorization server, go and grab the resource
		return handleOAuth2Callback(oa.Options, ctx)
	}

	// --- Resource Owner (user) is knocking the door --//
	// is any access token in the session?
	session, _ := ctx.GetSession() // todo(jtedilla) - handle situation where session is not enabled
	accessToken := unmarshallToken(session)
	if accessToken == nil || accessToken.Expired() {
		// We, the client, will redirect the resource owner to the authorization server for authentication
		// and obtain his/her authorization. The authorization server will redirect the owner to the client with
		// an authorization grant ('code')

		// This is the URL that Google has defined as an authorization endpoint in order to obtain
		// and authorization grant

		// State is a token to protect the user from CSRF attacks. You must
		// always provide a non-zero string and validate that it matches the
		// the state query parameter on your redirect callback.
		// See http://tools.ietf.org/html/rfc6749#section-10.12 for more info.
		url := oa.Options.AuthCodeURL("/", "", "") //todo(jtedilla) - provide a better state
		http.Redirect(ctx.GetResponseWriter(), ctx.GetHttpRequest(), url, http.StatusFound)
	}

	// case where req coming from resource owner, and access token is present and valid within the session
	return nil, nil

}

func isAuthorizationGrantPresent(r *http.Request) (bool, string) {
	code := r.FormValue("code")

	if code == "" {
		return false, ""
	}
	return true, code
}

func handleOAuth2Callback(oauthOptions *goauth2.Options, ctx core.FlowContext) (*http.Response, error) {
	//Get the code from the response
	code := ctx.GetHttpRequest().FormValue("code")

	t, err := oauthOptions.NewTransportFromCode(code)
	if err != nil {
		return nil, errors.FromStatus(http.StatusUnauthorized) //todo(jtedilla) - is this the right status to return here?
	}

	// Store the credentials in the session
	val, _ := json.Marshal(t.Token())
	session, _ := ctx.GetSession()
	core.SetSessionValue(session, KEY_TOKEN, val)

	// todo(jtedilla) - grab the profile and register it agains db
	// const profileInfoURL = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json"

	// the The transport has a valid token. Create an *http.Client
	// with which we can make authenticated API requests
	// resp, _ := t.Client().Get(profileInfoURL)
	// buf := make([]byte, 1024)
	// logger.Debug("Response obtained from AuthServer: %s", string(resp.Body.Read(buf)))
	// todo - any need to obtain anything from here??

	return nil, nil
}

func (oa *OAuth2) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func init() {
	core.Register("oauth2", NewOAuth2)
}
