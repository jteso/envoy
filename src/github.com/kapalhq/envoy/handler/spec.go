package handler

import (
	"net/http"

	"github.com/kapalhq/envoy/context"
)

type ContainerSpec interface {
	context.Expandable
	context.Navigable
	GetRouter() *Router
	ServeHTTP(http.ResponseWriter, *http.Request)
	GetLastRequestId() int64
}
