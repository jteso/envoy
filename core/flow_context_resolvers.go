package core

import (
	"strconv"
	"strings"
)

//	"message.req": Example,
//	"message.req.proto": Example,
//	"message.req.version": Example,
//	"message.req.body": Example,

//	"message.req.headers.count": Example,
//	"message.req.headers.names": Example,
//
//	"message.resp": Example,
//	"message.resp.proto": Example,
//	"message.resp.version": Example,
//	"message.resp.body": Example,
//	"message.resp.status": Example,
//	"message.req.uri": Example,
//	"message.req.verb": Example,
//	"message.req.version": Example,
//	"message.req.messageid": Example,
//
//	"message.req.queryparam.?": Example,
//	"message.req.queryparams.count": Example,
//	"message.req.queryparams.names": Example,
//	"message.req.querystring": Example,
//
//	"message.req.formparam.?": Example,
//	"message.req.formparams.count": Example,
//	"message.req.formparams.names": Example,
//	"message.req.formstring": Example,
//
//	"message.resp.header.?": Example,
//	"message.resp.headers.count": Example,
//	"message.resp.headers.names": Example,

var flowCtxResolvers = map[string]func(FlowContext, string) string{
	"message.req.path":          GetPath,
	"message.req.header.?":      GetHeader,
	"message.req.headers.count": GetHeadersCount,
	"message.req.headers.names": GetHeadersNames,
}

func GetPath(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().URL.Path
}

func GetHeader(ctx FlowContext, param string) string {
	return ctx.GetHttpRequest().Header.Get(param)
}

func GetHeadersCount(ctx FlowContext, param string) string {
	return strconv.Itoa(len(ctx.GetHttpRequest().Header))
}

func GetHeadersNames(ctx FlowContext, param string) string {
	shead := make([]string, 0, len(ctx.GetHttpRequest().Header))
	for headname, _ := range ctx.GetHttpRequest().Header {
		shead = append(shead, headname)
	}
	return strings.Join(shead, ",")
}