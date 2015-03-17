//// Copyright 2013 Julien Schmidt. All rights reserved.
//// Use of this source code is governed by a BSD-style license that can be found
//// in the LICENSE file.
//
package core

//
//import (
//	"testing"
//
//	. "gopkg.in/check.v1"
//)
//
//func TestRequest(t *testing.T) { TestingT(t) }
//
//type RequestSuite struct {
//	//	MockProxy proxy.Proxy
//}
//
//var _ = Suite(&RequestSuite{
////	MockProxy: proxy.Mock(),
//})
//
//func (s *RequestSuite) TestRouter(c *C) {
//	router := NewRouter()
//
//	router.GET("/batch/:name", s.MockProxy)
//	_, params, found := router.Lookup("GET", "/batch/paymentBatch")
//
//	//	c.Assert(app.GetID(), Equals, s.MockProxy.GetID())
//	c.Assert(found, Equals, true)
//	c.Assert(params.Get(":name"), Equals, "paymentBatch")
//}
//
//func (s *RequestSuite) TestRouterWithExtraSlashNotFound(c *C) {
//	router := NewRouter()
//
//	router.GET("/batch/:name", s.MockProxy)
//	app, _, found := router.Lookup("GET", "/batch/paymentBatch/")
//
//	c.Assert(app, IsNil)
//	c.Assert(found, Equals, false)
//
//}
//
//func (s *RequestSuite) TestRouterWithPathSegmentParams(c *C) {
//	router := NewRouter()
//
//	router.Register("GET", "/batch/:name/status", s.MockProxy)
//	app, params, found := router.Lookup("GET", "/batch/paymentBatch/status")
//
//	c.Assert(app.GetID(), Equals, s.MockProxy.GetID())
//	c.Assert(found, Equals, true)
//	c.Assert(params.Get(":name"), Equals, "paymentBatch")
//}
//
//func (s *RequestSuite) TestUnregisterProxy(c *C) {
//	router := NewRouter()
//
//	router.Register("GET", "/batch/:name/status", s.MockProxy)
//	app, params, found := router.Lookup("GET", "/batch/paymentBatch/status")
//
//	//	c.Assert(app.GetID(), Equals, s.MockProxy.GetID())
//	c.Assert(found, Equals, true)
//	c.Assert(params.Get(":name"), Equals, "paymentBatch")
//
//	router.Unregister("GET", "/batch/:name/status")
//	app, _, found = router.Lookup("GET", "/batch/paymentBatch/status")
//
//	c.Assert(app, IsNil)
//	c.Assert(found, Equals, false)
//}
