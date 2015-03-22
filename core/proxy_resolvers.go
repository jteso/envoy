package core

import "strconv"

var ProxyCtxResolvers = map[string]func(Proxy, string) string{
	"Proxy.id":          ResolveProxyId,
	"Proxy.method":      ResolveProxyMethod,
	"Proxy.policy.size": ResolveProxyPolicySize,
	//		"Proxy.current.module.name": func,
	//		"Proxy.current.module.step": func,
}

func ResolveProxyId(m Proxy, param string) string {
	return m.GetId()
}

func ResolveProxyMethod(m Proxy, param string) string {
	return m.GetMethod()
}

func ResolveProxyPolicySize(m Proxy, param string) string {
	return strconv.Itoa(len(m.GetAttachedPolicy().ModuleChain.ModuleWrappers))
}
