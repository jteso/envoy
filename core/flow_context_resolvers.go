package core

import (
	"strconv"
	"strings"
	"fmt"
	"io/ioutil"
)

var flowCtxResolvers = map[string]func(FlowContext, string) string{
	"request":					 getRequest,
	"request.proto":			 getRequestProto,
	"request.body":				 getRequestBody,
	"request.path":              getRequestPath,
	"request.uri":               getRequestUri,
	"request.verb":              getRequestVerb,

	"request.header.?":          getRequestHeader,
	"request.headers.count":     getRequestHeadersCount,
	"request.headers.names":     getRequestHeadersNames,

	"request.queryparam.?":      getRequestQueryParam,
	"request.queryparams.count": getRequestQueryParamCount,
	"request.queryparams.names": getRequestQueryParamNames,
	"request.querystring": 		 getRequestQueryString,

	"request.formparam.?":       getRequestFormParam,
	"request.formparam.count":   getRequestFormParamCount,
	"request.formparam.names":   getRequestFormParamNames,

	"response":					 getResponse,
	"response.proto":			 getResponseProto,
	"response.body":			 getResponseBody,
	"response.status":			 getResponseStatus,
}

func getRequestFormParam(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().Form.Get(param)
}

func getRequestFormParamCount(ctx FlowContext, param string) string {
	return strconv.Itoa(len(ctx.GetHttpRequest().Form))
}

func getRequestFormParamNames(ctx FlowContext, param string) string {
	values := ctx.GetHttpRequest().Form
	keys := make([]string, 0, len(values))
	for k := range values {
		keys = append(keys, k)
	}
	return strings.Join(keys, ",")
}

func getResponse(ctx FlowContext, param string) string {
	return fmt.Sprintf("%+v", ctx.GetHttpResponse())
}

func getResponseProto(ctx FlowContext, param string) string {
	return ctx.GetHttpResponse().Proto
}

func getResponseBody(ctx FlowContext, param string) string {
	if b, err := ioutil.ReadAll(ctx.GetHttpResponse().Body); err == nil {
		return string(b)
	}
	return "" // we fail silently
}

func getResponseStatus(ctx FlowContext, param string) string {
	return ctx.GetHttpResponse().Status
}


func getRequest(ctx FlowContext, param string) string {
	return fmt.Sprintf("%+v", ctx.GetHttpRequest())
}

func getRequestProto(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().Proto	
}

func getRequestUri(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().RequestURI
}

func getRequestVerb(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().Method
}

func getRequestBody(ctx FlowContext, param string) string {
	if b, err := ioutil.ReadAll(ctx.GetHttpRequest().Body); err == nil {
		return string(b)
	}
	return "" // we fail silently
}

func getRequestPath(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().URL.Path
}

func getRequestHeader(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().Header.Get(param)
}

func getRequestHeadersCount(ctx FlowContext, param string) string {
	return strconv.Itoa(len(ctx.GetHttpRequest().Header))
}

func getRequestHeadersNames(ctx FlowContext, param string) string {
	shead := make([]string, 0, len(ctx.GetHttpRequest().Header))
	for headname, _ := range ctx.GetHttpRequest().Header {
		shead = append(shead, headname)
	}
	return strings.Join(shead, ",")
}

func getRequestQueryParam(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().URL.Query().Get(param)
}

func getRequestQueryParamCount(ctx FlowContext, param string) string {
	return strconv.Itoa(len(ctx.GetHttpRequest().URL.Query()))
}

func getRequestQueryParamNames(ctx FlowContext, param string) string {
	values := ctx.GetHttpRequest().URL.Query()
	keys := make([]string, 0, len(values))
	for k := range values {
		keys = append(keys, k)
	}
	return strings.Join(keys, ",")
}

func getRequestQueryString(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().URL.Query().Encode()
}
