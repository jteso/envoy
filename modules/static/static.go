package static

import (
	"bytes"
	"io/ioutil"
	"net/http"
	"net/http/httptest"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/httputils"
	"path"
	"regexp"
	"github.com/jteso/envoy/errors"
	"fmt"
	"github.com/jteso/envoy/logutils"
	"strings"
)

// Static module acts as a file server, serving www files (js, css, html...) from a given local path.
// Please note, that this module always returns on `ProcessRequest`, hence any
// module chained in a policy after it, will never be called.
// ProcessResponse will be called during the unwinding of the policy.
//
// Params:
//  * `only`: files that satisfied this regex will be served, otherwise 404 error is returned
//  * `path`: absolute path to lookup for the file
//
// Example:
// - www: {
//       only: "([^\\s]+(\\.(?i)(jpg|gif|bmp|png|css|js|html)$)"
//       path: "/opt/envoy/www"

const indexPage = "index.html"

type Static struct {
	regex *regexp.Regexp
	location string
}

func NewStatic(params core.ModuleParams) *Static {
	r, err := regexp.Compile(params.GetString("filter"))
	if err != nil {
		panic(fmt.Sprintf("Error while parsing filter due to %s", err.Error()))
	}
	return &Static{
		regex: r,
		location: params.GetString("location"),
	}
}


func (static *Static) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	fileRequested := c.GetHttpRequest().URL.Path[1:]
	if !static.regex.MatchString(fileRequested){
		logutils.FileLogger.Debug("Resource: %s was rejected as it does not match the regex given", fileRequested)
		return nil, errors.FromStatus(http.StatusNotFound)
	}
	resp := &http.Response{
		Header: make(http.Header),
	}
	resRecorder := httptest.NewRecorder()
	resource := path.Join(static.location, fileRequested)

	// If index.html is requested, we will drop it to avoid a local redirect, which surely will confuse our router.
	// Otherwise, lets carry on the full path to the file
	if strings.HasSuffix(fileRequested, indexPage){
		c.GetHttpRequest().URL.Path = c.GetHttpRequest().URL.Path[0:strings.LastIndex(c.GetHttpRequest().URL.Path, "/")]
		resource = static.location
	}

	http.ServeFile(resRecorder, c.GetHttpRequest(), resource)

	httputils.CopyHeaders(resp.Header, resRecorder.Header())
	resp.StatusCode = http.StatusOK
	resp.Body = ioutil.NopCloser(bytes.NewReader(resRecorder.Body.Bytes()))

	return resp, nil
}

func (static *Static) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func init() {
	core.Register("static", NewStatic)
}
