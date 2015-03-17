package oauth2

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/sessions"
	goauth2 "github.com/jteso/oauth2"
	"time"
)

// Google returns a new Google OAuth 2.0 backend endpoint.
func Google(opt ...goauth2.Option) *goauth2.Options {
	return NewOAuth2Provider(append(opt, goauth2.Endpoint(
		"https://accounts.google.com/o/oauth2/auth",
		"https://accounts.google.com/o/oauth2/token"),
	))
}

// Github returns a new Github OAuth 2.0 backend endpoint.
func Github(opt ...goauth2.Option) *goauth2.Options {
	return NewOAuth2Provider(append(opt, goauth2.Endpoint(
		"https://github.com/login/oauth/authorize",
		"https://github.com/login/oauth/access_token"),
	))
}

func Facebook(opt ...goauth2.Option) *goauth2.Options {
	return NewOAuth2Provider(append(opt, goauth2.Endpoint(
		"https://www.facebook.com/dialog/oauth",
		"https://graph.facebook.com/oauth/access_token"),
	))
}

func LinkedIn(opt ...goauth2.Option) *goauth2.Options {
	return NewOAuth2Provider(append(opt, goauth2.Endpoint(
		"https://www.linkedin.com/uas/oauth2/authorization",
		"https://www.linkedin.com/uas/oauth2/accessToken"),
	))
}

func NewOAuth2Provider(opts []goauth2.Option) *goauth2.Options {
	options, err := goauth2.New(opts...)
	if err != nil {
		// CHANGELOG.md(javier): Don't panic.
		panic(fmt.Sprintf("oauth2: %s", err))
	}

	return options

}

func unmarshallToken(s *sessions.Session) (t *token) {
	if s.Values[KEY_TOKEN] == "" || s.Values[KEY_TOKEN] == nil {
		return
	}
	data := s.Values[KEY_TOKEN].([]byte)
	var tk goauth2.Token
	json.Unmarshal(data, &tk)
	return &token{tk}
}

// Tokens represents a container that contains user's OAuth 2.0 access and refresh tokens.
type Tokens interface {
	Access() string
	Refresh() string
	Expired() bool
	ExpiryTime() time.Time
}

type token struct {
	goauth2.Token
}

// Access returns the access token.
func (t *token) Access() string {
	return t.AccessToken
}

// Refresh returns the refresh token.
func (t *token) Refresh() string {
	return t.RefreshToken
}

// Expired returns whether the access token is expired or not.
func (t *token) Expired() bool {
	if t == nil {
		return true
	}
	return t.Token.Expired()
}

// ExpiryTime returns the expiry time of the user's access token.
func (t *token) ExpiryTime() time.Time {
	return t.Expiry
}

// String returns the string representation of the token.
func (t *token) String() string {
	return fmt.Sprintf("tokens: %v", t)
}
