package core

type EnvoyAPI interface {
	GetMiddleware(mid string) (Middleware, bool)
	GetAllMiddlewareIds() []string
	//	AddMiddleware(middlewares Middleware)
	//	RemoveMiddleware(middlewares Middleware)
	//	RestartMiddleware(middlewares Middleware)
}
