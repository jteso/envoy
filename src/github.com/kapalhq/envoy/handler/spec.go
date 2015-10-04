package handler

import "net/http"

type HandlerSpec interface {
	GetRouter() *Router
	ServeHTTP(http.ResponseWriter, *http.Request)
	GetLastRequestId() int64
}
