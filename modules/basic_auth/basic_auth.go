/*
* Filter that performs a basic auth for incoming requests
* It will look for the following header:
* `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`
*
* Example: Basic anRlZGlsbGE6cGFqYXJvbG9jbw==   (jtedilla:pajaroloco)
 */
package basic_auth

import (
	"encoding/base64"
	"net/http"
	"strings"

	"github.com/jteso/envoy/errors"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
)

type BasicAuth struct {
	username string
	password string
}

func NewBasicAuth(params core.ModuleParams) *BasicAuth {
	return &BasicAuth{
		username: params.GetString("username"),
		password: params.GetString("password"),
	}
}

func (ba *BasicAuth) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	authHeaderValue := c.GetHttpRequest().Header.Get("Authorization")
	if authHeaderValue == "" {
		logutils.FileLogger.Error("Attempted access with malformed header, no auth header found. Path: %s, Origin: %s", c.GetHttpRequest().URL, c.GetHttpRequest().Referer())
		return nil, errors.FromStatus(http.StatusUnauthorized) // 401
	}
	// Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
	parts := strings.Fields(authHeaderValue)
	if len(parts) != 2 {
		logutils.FileLogger.Error("Attempted access with malformed header, header not in basic auth format.")
		return nil, errors.FromStatus(http.StatusBadRequest) //400
	}

	// Decode the username:password string
	authvaluesStr, err := base64.StdEncoding.DecodeString(parts[1])
	if err != nil {
		logutils.FileLogger.Error("Base64 Decoding failed of basic auth data: %s", err)
		return nil, errors.FromStatus(http.StatusBadRequest) //400
	}

	authValues := strings.Split(string(authvaluesStr), ":")
	if len(authValues) != 2 {
		// Header malformed
		logutils.FileLogger.Error("Attempted access with malformed header, values not in basic auth format.")
		return nil, errors.FromStatus(http.StatusBadRequest) //400
	}

	// CHANGELOG.md - check session and identity for valid key

	// Ensure that username and password match up
	if ba.username != authValues[0] || ba.password != authValues[1] {
		logutils.FileLogger.Error("User not authorized")
		return nil, errors.FromStatus(http.StatusForbidden) //403
	}

	return nil, nil // all good
}

func (ba *BasicAuth) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func init() {
	core.Register("basic_auth", NewBasicAuth)
}
