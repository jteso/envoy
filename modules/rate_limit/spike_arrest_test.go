package rate_limit

import (
	"testing"

	. "gopkg.in/check.v1"

	"time"

	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/httputils"
	"github.com/jteso/envoy/modules"
)

var testParams = map[string]interface{}{
	"rate_ps": "1",
}

// go test -test.run="^TestSpikeArrest"
func TestSpikeArrest(t *testing.T) { TestingT(t) }

type SpikeArrestSuite struct {
	sa *SpikeArrest
}

var _ = Suite(&SpikeArrestSuite{
	sa: NewSpikeArrest(modules.ToModuleParams(testParams)),
})

func (s *SpikeArrestSuite) TestHappyPath(c *C) {
	mc := httputils.NewMockContext()
	select {
	case <-time.After(1 * time.Second):
		resp, err := s.sa.ProcessRequest(mc)
		c.Assert(resp, IsNil)
		c.Assert(err, IsNil)
		s.sa.ProcessResponse(mc)
	}

	select {
	case <-time.After(1 * time.Second):
		resp2, err2 := s.sa.ProcessRequest(mc)
		c.Assert(resp2, IsNil)
		c.Assert(err2, IsNil)
	}

}

func (s *SpikeArrestSuite) TestArrestedTraffic(c *C) {
	mc := httputils.NewMockContext()
	select {
	case <-time.After(1 * time.Second):
		resp, err := s.sa.ProcessRequest(mc)
		c.Assert(resp, IsNil)
		c.Assert(err, IsNil)
		s.sa.ProcessResponse(mc)
		//the next call is coming too quickly
		resp2, err2 := s.sa.ProcessRequest(mc)
		c.Assert(resp2, IsNil)
		c.Assert(err2.(*errors.HttpError).GetStatusCode(), Equals, statusTooManyRequests)
	}

}
