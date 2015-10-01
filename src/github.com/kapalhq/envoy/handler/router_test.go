package handler

import (
	"testing"

	"github.com/jteso/testify/assert"
	"github.com/kapalhq/envoy/proxy"
)

func TestHappyRouter(t *testing.T) {
	mockProxy := proxy.New("testProxy", "GET", "/batch/:name", true, nil)

	router := NewRouter()
	router.GET(mockProxy)
	resultProxy, params, found := router.Lookup("GET", "/batch/paymentBatch")

	assert.True(t, found)
	assert.Equal(t, resultProxy.GetId(), mockProxy.GetId())
	assert.Equal(t, params.Get(":name"), "paymentBatch")
}

func TestNoProxyFound(t *testing.T) {
	mockProxy := proxy.New("testProxy", "GET", "/nonexistentroute", true, nil)

	router := NewRouter()
	router.GET(mockProxy)
	_, _, found := router.Lookup("GET", "/batch/paymentBatch")

	assert.False(t, found)
}

func TestWrongMethod(t *testing.T) {
	mockProxy := proxy.New("testProxy", "GET", "/ping", true, nil)

	router := NewRouter()
	router.GET(mockProxy)
	_, _, found := router.Lookup("POST", "/ping")

	assert.False(t, found)
}
