package core

import (
	"net/http"
	"testing"

	. "gopkg.in/check.v1"
	"net/url"
	"sync"
)

func TestRequest(t *testing.T) { TestingT(t) }

type RequestSuite struct {
	MockFlowContext      *FlowContextImpl
	MockFlowMultiContext *FlowContextImpl
}

var _ = Suite(&RequestSuite{
	MockFlowContext:      NewMockContext(),
	MockFlowMultiContext: NewMockWithinProxy(),
})

func (s *RequestSuite) SetUpSuite(c *C) {
}

//func (s *RequestSuite) TestUserDataInt(c *C) {
//	br := NewFlowContext(&http.Request{}, 0, nil)
//	br.SetUserData("caller1", 100)
//	data, present := br.GetUserData("caller1")
//
//	c.Assert(present, Equals, true)
//	c.Assert(data.(int), Equals, 100)
//
//	br.SetUserData("caller2", 200)
//	data, present = br.GetUserData("caller1")
//	c.Assert(present, Equals, true)
//	c.Assert(data.(int), Equals, 100)
//
//	data, present = br.GetUserData("caller2")
//	c.Assert(present, Equals, true)
//	c.Assert(data.(int), Equals, 200)
//
//	br.DeleteUserData("caller2")
//	_, present = br.GetUserData("caller2")
//	c.Assert(present, Equals, false)
//}
//
//func (s *RequestSuite) TestUserDataNil(c *C) {
//	br := NewBaseContext(&http.Request{}, 0, nil)
//	_, present := br.GetUserData("caller1")
//	c.Assert(present, Equals, false)
//}

func (s *RequestSuite) TestSplitContextKeys(c *C) {
	path := s.MockFlowContext.GetValue("message.req.path")
	c.Assert(path, Equals, "/test")

	header := s.MockFlowContext.GetValue("message.req.header.user")
	c.Assert(header, Equals, "jtedilla")

}
func (s *RequestSuite) TestVarsResolveOnLevelUp(c *C) {
	path := s.MockFlowMultiContext.GetValue("message.req.path")
	c.Assert(path, Equals, "/test")

	header := s.MockFlowMultiContext.GetValue("message.req.header.user")
	c.Assert(header, Equals, "jtedilla")

	id := s.MockFlowMultiContext.GetValue("proxy.id")
	method := s.MockFlowMultiContext.GetValue("proxy.method")

	c.Assert(id, Equals, "id_1")
	c.Assert(method, Equals, "POST")
}

func NewMockContext() *FlowContextImpl {
	headerTest := make(http.Header)
	headerTest.Add("user", "jtedilla")

	urlTest := &url.URL{Path: "/test"}

	return &FlowContextImpl{
		HttpRequest:   &http.Request{Header: headerTest, URL: urlTest},
		HttpResponse:  &http.Response{Header: make(http.Header)},
		Id:            0,
		Body:          nil,
		userDataMutex: &sync.RWMutex{},
		parent:        nil,
	}
}

func NewMockWithinMiddleware() *FlowContextImpl {
	headerTest := make(http.Header)
	headerTest.Add("user", "jtedilla")

	m := NewMiddleware("id_1", "POST", "/test", false, nil, nil)
	fc := &FlowContextImpl{
		HttpRequest:   &http.Request{Header: headerTest, URL: &url.URL{Path: m.GetPattern()}},
		HttpResponse:  &http.Response{Header: make(http.Header)},
		Id:            0,
		Body:          nil,
		userDataMutex: &sync.RWMutex{},
		parent:        m,
	}
	return fc
}
