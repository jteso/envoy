package mod_access

import (
	"testing"

	. "gopkg.in/check.v1"

	"net/http"

	"github.com/kapalhq/envoy/errors"
	"github.com/kapalhq/envoy/httputils"
	"github.com/kapalhq/envoy/modules"
)

var testParams = map[string]interface{}{
	"allow": "127.0.0.1, :::1",
	"deny":  "all",
}

// go test -test.run="^TestAccess$"
func TestAccess(t *testing.T) { TestingT(t) }

type AccessSuite struct {
	access *Access
}

var _ = Suite(&AccessSuite{
	access: NewAccess(modules.ToModuleParams(testParams)),
})

func (s *AccessSuite) TestHappyPath(c *C) {
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().RemoteAddr = "127.0.0.1:80"
	resp, err := s.access.ProcessRequest(mc)
	c.Assert(resp, IsNil)
	c.Assert(err, IsNil)
}

func (s *AccessSuite) TestNotAllowedIP(c *C) {
	mc := httputils.NewMockContext()
	mc.GetHttpRequest().RemoteAddr = "127.0.0.2:80"
	resp, err := s.access.ProcessRequest(mc)
	c.Assert(resp, IsNil)
	c.Assert(err.(*errors.HttpError).GetStatusCode(), Equals, http.StatusForbidden)
}
