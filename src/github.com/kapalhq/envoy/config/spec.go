package config

import "github.com/kapalhq/envoy/proxy"

type Configurable interface {
	OnChangeProxy(target proxy.ApiProxySpec)
}

type Backend interface {
	WatchProxyChanges(notifyC chan proxy.ApiProxySpec, stopC chan bool)
}
