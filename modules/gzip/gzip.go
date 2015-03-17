package gzip

import (
	"bytes"
	gz "compress/gzip"
	"io"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
)

type GZip struct {
}

// ---
// CONSTRUCTORS
// ---

func NewGzip(params core.ModuleParams) *GZip {
	return &GZip{}
}

func (gzip *GZip) ProcessRequest(req core.FlowContext) (*http.Response, error) {
	return nil, nil
}

func (gzip *GZip) ProcessResponse(c core.FlowContext) (*http.Response, error) {

	if strings.Contains(c.GetHttpRequest().Header.Get("Accept-Encoding"), "gzip") {
		c.GetHttpResponse().Header.Set("Content-Encoding", "gzip")
		c.GetHttpResponse().Header.Set("Vary", "Accept-Encoding")

		// Compress the content of body in a buffer
		var b bytes.Buffer
		w := gz.NewWriter(&b)
		defer w.Close()
		io.Copy(w, c.GetHttpResponse().Body)
		w.Flush()

		// assign the buffer to body
		c.GetHttpResponse().Body = ioutil.NopCloser(bytes.NewReader(b.Bytes()))

		return c.GetHttpResponse(), nil
	} else {
		logutils.FileLogger.Debug("Gzip not accepted")
		return nil, nil
	}
}

func init() {
	core.Register("gzip", NewGzip)
}
