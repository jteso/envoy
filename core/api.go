package core

type EnvoyAPI interface {
	GetProxy(mid string) (Proxy, bool)
	GetAllProxies() []string
	//	AddMiddleware(middlewares Middleware)
	//	RemoveMiddleware(middlewares Middleware)
	//	RestartMiddleware(middlewares Middleware)
}
