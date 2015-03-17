package access

// The `access` module  allows limiting access to certain client addresses.
// If request is denied this module will intercept the request by returning: `HTTP 403 Forbidden Error` Message
//
// Syntax:
// allow address | CIDR | unix: | all;
// deny address | CIDR | unix: | all;
//
// Example:
// ```
// [access]
// allow: 192.168.1.0, :::1
// deny:  all

import (
	"net"
	"net/http"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/logutils"
)

type Access struct {
	Allow []string
	Deny  []string
}

// ---
// Interface implementation
// ---

// This function will be called each time the request hits the location with this middleware activated

func (a *Access) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	// Get the client IP address
	ip, _, _ := net.SplitHostPort(c.GetHttpRequest().RemoteAddr)

	fba := a.getFallbackAccess()
	if (fba == "ALLOW" && a.isExplicitlyDenied(ip)) || (fba == "DENY" && !a.isExplicitlyAllowed(ip)) {
		return nil, errors.FromStatus(http.StatusForbidden)
	} else {
		return nil, nil
	}
}

func (a *Access) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

// ---
// CONSTRUCTORS
// ---

func NewAccess(params core.ModuleParams) *Access {
	return &Access{
		Allow: params.GetArrayOrDefault("allow", []string{""}),
		Deny:  params.GetArrayOrDefault("deny", []string{"*"}),
	}
}

func NewAccess2(params core.ModuleParams) *Access {
	return build(params.GetStringArray("allow", ","), params.GetStringArray("deny", ","))
}

func build(allow []string, deny []string) *Access {
	atmp := make([]string, len(allow))
	dtmp := make([]string, len(deny))

	copy(atmp, allow)
	copy(dtmp, deny)

	return &Access{
		Allow: atmp,
		Deny:  dtmp,
	}
}

func (a *Access) getFallbackAccess() string {
	for _, i := range a.Allow {
		if i == "*" {
			return "ALLOW"
		}
	}
	logutils.FileLogger.Debug("Behaviour: DENIED requests if not explicitly allowed.")
	return "DENY"
}

func (a *Access) isExplicitlyAllowed(ip string) bool {

	for _, ipa := range a.Allow {
		if strings.TrimSpace(ipa) == ip {
			logutils.FileLogger.Debug("IP: %s has been explicity allowed", ip)
			return true
		}
	}
	logutils.FileLogger.Debug("IP: %s has NOT been explicity allowed", ip)
	return false
}

func (a *Access) isExplicitlyDenied(ip string) bool {

	for _, ipd := range a.Deny {
		if strings.TrimSpace(ipd) == ip {
			return true
		}
	}
	return false
}

func init() {
	core.Register("access", NewAccess)
}
