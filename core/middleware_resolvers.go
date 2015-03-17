package core

import "strconv"

var MiddlewareCtxResolvers = map[string]func(Middleware, string) string{
	"middleware.id":          ResolveMiddlewareId,
	"middleware.method":      ResolveMiddlewareMethod,
	"middleware.policy.size": ResolveMiddlewarePolicySize,
	//		"middleware.current.module.name": func,
	//		"middleware.current.module.step": func,
}

func ResolveMiddlewareId(m Middleware, param string) string {
	return m.GetId()
}

func ResolveMiddlewareMethod(m Middleware, param string) string {
	return m.GetMethod()
}

func ResolveMiddlewarePolicySize(m Middleware, param string) string {
	return strconv.Itoa(len(m.GetAttachedPolicy().ModuleChain.ModuleWrappers))
}
