/*
## Description
Module `cors` is a handler responsible to handle CORS requests.
It follows the recommended standard of the W3C (http://www.w3.org/TR/cors/)

## Preflight
If support for preflight request is required, the verb: `OPTIONS` must be included
in the list of accepted verbs for a given middleware.

## Kudos
The implementation of this module has been adapted from the original project:
- https://github.com/rs/cors (Olivier Poitrey)

## Usage
- cors: { AllowedOrigins: [""] //default: "*"
		  AllowedMethods: [""] //default: GET,POST
		  AllowedHeaders: [""] //default: Accept, Content-Type, Origin
		  ExposedHeaders: [""] //default: ""
		  AllowCredentials: bool //default: false
		  MaxAge: int //default: 0
		  Debug: bool //default: false [NOT IMPLEMENTED YET]
*/
package cors

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/httputils"
	"github.com/jteso/envoy/logutils"
)

type Cors struct {
	// AllowedOrigins is a list of origins a cross-domain request can be executed from.
	// If the special "*" value is present in the list, all origins will be allowed.
	// Default value is ["*"]
	AllowedOrigins []string
	// AllowedMethods is a list of methods the client is allowed to use with
	// cross-domain requests. Default value is simple methods (GET and POST)
	AllowedMethods []string
	// AllowedHeaders is list of non simple headers the client is allowed to use with
	// cross-domain requests.
	// If the special "*" value is present in the list, all headers will be allowed.
	// Default value is [] but "Origin" is always appended to the list.
	AllowedHeaders []string
	// ExposedHeaders indicates which headers are safe to expose to the API of a CORS
	// API specification
	ExposedHeaders []string
	// AllowCredentials indicates whether the request can include user credentials like
	// cookies, HTTP authentication or client side SSL certificates.
	AllowCredentials bool
	// MaxAge indicates how long (in seconds) the results of a preflight request
	// can be cached
	MaxAge int
	// Debugging flag adds additional output to debug server side CORS issues
	Debug bool
}

func NewCors(params core.ModuleParams) *Cors {
	return &Cors{
		AllowedOrigins:   params.GetArrayOrDefault("AllowedOrigins", []string{"*"}),
		AllowedMethods:   params.GetArrayOrDefault("AllowedMethods", []string{"GET", "POST"}),
		AllowedHeaders:   append(params.GetArrayOrDefault("AllowedHeaders", []string{"Accept", "Content-Type"}), "Origin"),
		ExposedHeaders:   params.GetArrayOrDefault("ExposedHeaders", []string{}),
		AllowCredentials: params.GetBoolOrDefault("AllowCredentials", false),
		MaxAge:           params.GetIntOrDefault("MaxAge", 0),
		Debug:            params.GetBoolOrDefault("Debug", false),
	}
}

/****************
Module interface
****************/

func (cors *Cors) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	if c.GetHttpRequest().Method == "OPTIONS" {
		return cors.HandlePreflight(c)
	}
	return cors.HandleActualRequest(c)

}

func (cors *Cors) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	origin := c.GetHttpRequest().Header.Get("Origin")

	// if the downstream flow comes with an error, just propagate it all the way down the module chain
	if c.GetError() != nil {
		return nil, c.GetError()
	}
	headers := c.GetHttpResponse().Header

	if c.GetHttpResponse().Header == nil {
		headers = make(http.Header)
	}

	headers.Set("Access-Control-Allow-Origin", origin)
	headers.Add("Vary", "Origin")

	if len(cors.ExposedHeaders) > 0 {
		headers.Set("Access-Control-Expose-Headers", strings.Join(cors.ExposedHeaders, ", "))
	}
	if cors.AllowCredentials {
		headers.Set("Access-Control-Allow-Credentials", "true")
	}
	resp := c.GetHttpResponse()
	resp.Header = headers

	return resp, nil
}

func init() {
	core.Register("cors", NewCors)
}

/************
  Aux Methods
 ************/

func (cors *Cors) HandlePreflight(c core.FlowContext) (*http.Response, error) {
	origin := c.GetHttpRequest().Header.Get("Origin")
	if !cors.isOriginAllowed(origin) {
		return nil, createOriginNotAllowedError(origin)
	}

	reqMethod := c.GetHttpRequest().Header.Get("Access-Control-Request-Method")
	if !cors.isMethodAllowed(reqMethod) {
		return nil, createMethodNotAllowedError(reqMethod)
	}

	reqHeaders := parseHeaderList(c.GetHttpRequest().Header.Get("Access-Control-Request-Headers")) // string with comma
	if !cors.areHeadersAllowed(reqHeaders) {
		return nil, createHeathersNotAllowedError(reqHeaders)
	}

	headers := make(http.Header)
	resp := c.GetHttpResponse()
	if resp != nil {
		httputils.CopyHeaders(headers, resp.Header)
	}
	headers.Set("Access-Control-Allow-Origin", origin)
	headers.Add("Vary", "Origin")
	headers.Set("Access-Control-Allow-Methods", strings.ToUpper(reqMethod))

	if len(reqHeaders) > 0 {
		headers.Set("Access-Control-Allow-Headers", strings.Join(reqHeaders, ", "))
	}
	if cors.AllowCredentials {
		headers.Set("Access-Control-Allow-Credentials", "true")
	}
	if cors.MaxAge > 0 {
		headers.Set("Access-Control-Max-Age", strconv.Itoa(cors.MaxAge))
	}

	return &http.Response{
		Header:     headers,
		StatusCode: http.StatusOK,
	}, nil

}

func (cors *Cors) HandleActualRequest(c core.FlowContext) (*http.Response, error) {
	origin := c.GetHttpRequest().Header.Get("Origin")

	if origin == "" {
		logutils.FileLogger.Error("Origin header not present in the request.")
		return nil, missingOriginError
	}

	if !cors.isOriginAllowed(origin) {
		logutils.FileLogger.Error("Origin: %s not allowed.", origin)
		return nil, createOriginNotAllowedError(origin)
	}
	// Not enforced by the spec but I agree with original author when he says it is a nice feature to control these methods
	reqMethod := c.GetHttpRequest().Method
	if !cors.isMethodAllowed(reqMethod) {
		return nil, createMethodNotAllowedError(reqMethod)
	}

	return nil, nil
}

// isOriginAllowed checks if a given origin is allowed to perform cross-domain requests
// on the endpoint
func (cors *Cors) isOriginAllowed(origin string) bool {
	allowedOrigins := cors.AllowedOrigins
	for _, allowedOrigin := range allowedOrigins {
		switch allowedOrigin {
		case "*":
			return true
		case origin:
			return true
		}
	}
	return false
}

// isMethodAllowed checks if a given method can be used as part of a cross-domain request
// on the endpoing
func (cors *Cors) isMethodAllowed(method string) bool {
	allowedMethods := cors.AllowedMethods
	if len(allowedMethods) == 0 {
		// If no method allowed, always return false, even for preflight request
		return false
	}
	method = strings.ToUpper(method)
	if method == "OPTIONS" {
		// Always allow preflight requests
		return true
	}
	for _, allowedMethod := range allowedMethods {
		if allowedMethod == method {
			return true
		}
	}
	return false
}

// areHeadersAllowed checks if a given list of headers are allowed to used within
// a cross-domain request.
func (cors *Cors) areHeadersAllowed(requestedHeaders []string) bool {
	if len(requestedHeaders) == 0 {
		return true
	}
	for _, header := range requestedHeaders {
		found := false
		for _, allowedHeader := range cors.AllowedHeaders {
			if allowedHeader == "*" || allowedHeader == header {
				found = true
				break
			}
		}
		if !found {
			return false
		}
	}
	return true
}

func parseHeaderList(headerList string) (headers []string) {
	for _, header := range strings.Split(headerList, ",") {
		header = http.CanonicalHeaderKey(strings.TrimSpace(header))
		if header != "" {
			headers = append(headers, header)
		}
	}
	return headers
}

/*********
Errors
*********/
var missingOriginError = &errors.HttpError{StatusCode: 400, Body: "Missing Origin"}

func createOriginNotAllowedError(originNotAllowed string) *errors.HttpError {
	return &errors.HttpError{
		StatusCode: 400,
		Body:       fmt.Sprintf("Preflight aborted: The origin %s is not allowed", originNotAllowed),
	}
}
func createMethodNotAllowedError(methodNotAllowed string) *errors.HttpError {
	return &errors.HttpError{
		StatusCode: 400,
		Body:       fmt.Sprintf("Preflight aborted. The method %s is not allowed", methodNotAllowed),
	}
}
func createHeathersNotAllowedError(heathersNotAllowed []string) *errors.HttpError {
	return &errors.HttpError{
		StatusCode: 400,
		Body:       fmt.Sprintf("Preflight aborted. At leat of the headers is not allowed: %s", strings.Join(heathersNotAllowed, ",")),
	}
}
