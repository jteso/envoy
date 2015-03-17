package core

//
//import (
//	"fmt"
//	"net/http"
//	"testing"
//
//	"github.com/jteso/envoy/httputils"
//	"github.com/jteso/envoy/modules"
//	. "gopkg.in/check.v1"
//)
//
//func TestPipeline(t *testing.T) { TestingT(t) }
//
//type PipelineSuite struct {
//	pipeline *Pipeline
//}
//
//var _ = Suite(&PipelineSuite{
//	pipeline: NewPipeline(),
//})
//
//func (s *PipelineSuite) TestAddModule(c *C) {
//	// Create the test module
//	OnRequestFn := func(r httputils.Context) (*http.Response, error) {
//		return nil, nil
//	}
//
//	OnResponseFn := func(r httputils.Context, a httputils.Attempt) {}
//
//	testModule := &modules.BaseModule{
//		OnRequest:  OnRequestFn,
//		OnResponse: OnResponseFn,
//	}
//
//	// add the module to the pipeline
//	s.pipeline.Add("id_1", 1, testModule)
//	//s.pipeline.Add("id_2", 2, testModule)
//
//	// Assert expected behaviour
//	moduleReturned := s.pipeline.Get("id_1")
//	c.Assert(moduleReturned, NotNil)
//
//}
//
//func (s *PipelineSuite) TestAddModulesWithNegativePriority(c *C) {
//	// Create the test module
//	OnRequestFn := func(r httputils.Context) (*http.Response, error) {
//		return nil, nil
//	}
//	OnResponseFn := func(r httputils.Context, a httputils.Attempt) {}
//
//	moduleUno := &modules.BaseModule{
//		Id:         "module1",
//		OnRequest:  OnRequestFn,
//		OnResponse: OnResponseFn,
//	}
//
//	moduleDos := &modules.BaseModule{
//		Id:         "module2",
//		OnRequest:  OnRequestFn,
//		OnResponse: OnResponseFn,
//	}
//
//	moduleTres := &modules.BaseModule{
//		Id:         "module3",
//		OnRequest:  OnRequestFn,
//		OnResponse: OnResponseFn,
//	}
//
//	// add the module to the pipeline
//	// FIXME: @JAVIER - why if the `id=id_1` does not work ?? something weird with the `_1` that does not occur
//	// with any other combination: underscore + number
//	s.pipeline.Add("id1", -2, moduleUno)
//	s.pipeline.Add("id2", -1, moduleDos)
//	s.pipeline.Add("id3", 1, moduleTres)
//
//	it := s.pipeline.GetIter()
//
//	for m := it.Next(); m != nil; m = it.Next() {
//		fmt.Printf("Module ID: %s\n", m.GetId())
//	}
//	// Assert expected behaviour
//	//moduleReturned := s.pipeline.Get("id_1")
//	//c.Assert(moduleReturned, NotNil)
//
//}
