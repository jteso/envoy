package core

import "strconv"

var ProxyCtxResolvers = map[string]func(Proxy, string) string{
	"proxy.id":          ResolveProxyId,
	"proxy.method":      ResolveProxyMethod,
	"proxy.policy.size": ResolveProxyPolicySize,
	"proxy.pattern":     ResolveProxyPattern,
}

func ResolveProxyId(p Proxy, param string) string {
	return p.GetId()
}

func ResolveProxyMethod(p Proxy, param string) string {
	return p.GetMethod()
}

func ResolveProxyPolicySize(p Proxy, param string) string {
	return strconv.Itoa(len(p.GetAttachedPolicy().ModuleChain.ModuleWrappers))
}

func ResolveProxyPattern(p Proxy, param string) string {
	return p.GetPattern()
}
