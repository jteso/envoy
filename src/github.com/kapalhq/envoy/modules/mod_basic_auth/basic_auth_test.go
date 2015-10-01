package basic_auth

import (
	"testing"

	. "gopkg.in/check.v1"

	"net/http"

	"github.com/kapalhq/envoy/errors"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/modules"
)

var testParams = map[string]interface{}{
	"username": "jtedilla",
	"password": "pass",
}

// go test -test.run="^TestBasicAuth"
func TestBasicAuth(t *testing.T) { TestingT(t) }

type BasicAuthSuite struct {
	ba *BasicAuth
}

var _ = Suite(&BasicAuthSuite{
	ba: NewBasicAuth(modules.ToModuleParams(testParams)),
})

func (s *BasicAuthSuite) TestHappyPath(c *C) {
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().Header = make(map[string][]string)
	mc.GetHttpRequest().Header.Set("Authorization", "Basic anRlZGlsbGE6cGFzcw==")
	resp, err := s.ba.ProcessRequest(mc)
	c.Assert(resp, IsNil)
	c.Assert(err, IsNil)
}

func (s *BasicAuthSuite) TestWrongCredentials(c *C) {
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().Header = make(map[string][]string)
	mc.GetHttpRequest().Header.Set("Authorization", "Basic d3Jvbmc6d3Jvbmc=") //wrong:wrong
	resp, err := s.ba.ProcessRequest(mc)
	c.Assert(resp, IsNil)
	c.Assert(err.(*errors.HttpError).GetStatusCode(), Equals, http.StatusForbidden)
}

func (s *BasicAuthSuite) TestIncorrectFormat(c *C) {
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().Header = make(map[string][]string)
	mc.GetHttpRequest().Header.Set("Authorization", "d3Jvbmc6d3Jvbmc=") //missing the prefix `Basic`
	resp, err := s.ba.ProcessRequest(mc)
	c.Assert(resp, IsNil)
	c.Assert(err.(*errors.HttpError).GetStatusCode(), Equals, http.StatusBadRequest)
}
