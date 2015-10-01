package handler

import "net/http"

type ContainerSpec interface {
	GetRouter() *Router
	ServeHTTP(http.ResponseWriter, *http.Request)
	GetLastRequestId() int64
}
