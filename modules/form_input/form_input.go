// Form_input parses the raw query from the URL and updates r.Form.

// For POST or PUT requests, it also parses the request body as a form and put the results into both r.PostForm and r.Form. POST and PUT body parameters take precedence over URL query string values in r.Form.

// If the request Body's size has not already been limited by MaxBytesReader, the size is capped at 10MB.

// ParseMultipartForm calls ParseForm automatically. It is idempotent.

package form_input

import (
	"net/http"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
	"github.com/mailgun/vulcan/errors"
)

type FormInput struct {
}

func (ba *FormInput) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	err := c.GetHttpRequest().ParseForm()
	if err != nil {
		logutils.FileLogger.Error("Error found while parsing the request form: %s", err)
		return nil, errors.FromStatus(http.StatusInternalServerError) //500
	}

	// Careful with these values, there are case-sensitive !!
	urlValues := c.GetHttpRequest().Form

	for k, v := range urlValues {
		logutils.FileLogger.Debug("Setting userData:[key:%s, value:%v]...", k, v)
		c.SetUserData(k, v)
	}
	return nil, nil
}

func (ba *FormInput) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func NewFormInput(params core.ModuleParams) *FormInput {
	return &FormInput{}
}

func init() {
	core.Register("form_input", NewFormInput)
}
