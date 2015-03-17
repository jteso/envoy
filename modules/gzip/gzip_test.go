package gzip

import (
	"testing"

	"bytes"
	gz "compress/gzip"
	"io"
	_ "io"
	"io/ioutil"
	_ "os"

	"github.com/jteso/envoy/httputils"
	"github.com/jteso/envoy/modules"
	. "gopkg.in/check.v1"
)

var testParams = map[string]interface{}{}

// go test -test.run="^TestBasicAuth"
func TestGzip(t *testing.T) { TestingT(t) }

type GzipSuite struct {
	gz *GZip
}

var _ = Suite(&GzipSuite{
	gz: NewGzip(modules.ToModuleParams(testParams)),
})

func (s *GzipSuite) TestHappyPath(c *C) {
	testMsg := "can you read this?"
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().Header = make(map[string][]string)
	mc.GetHttpRequest().Header.Set("Accept-Encoding", "gzip")
	mc.GetHttpResponse().Body = ioutil.NopCloser(bytes.NewReader([]byte(testMsg)))

	s.gz.ProcessResponse(mc)

	c.Assert(mc.GetHttpResponse().Header.Get("Content-Encoding"), Equals, "gzip")

	var reader io.ReadCloser
	reader, _ = gz.NewReader(mc.GetHttpResponse().Body)
	bodyBytes, _ := ioutil.ReadAll(reader)
	c.Assert(string(bodyBytes), Equals, testMsg)
	//io.Copy(os.Stdout, reader)

}
