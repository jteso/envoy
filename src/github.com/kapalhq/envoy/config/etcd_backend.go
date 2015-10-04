package config

import (
	"github.com/coreos/go-etcd/etcd"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/proxy"
)

const (
	ETCD_API_PROXY_DIR = "/envoy/apiproxies"
)

type EtcdBackend struct {
	driver     string
	etcdClient *etcd.Client
}

func NewEtcdBackend(etcdNodes []string) *EtcdBackend {
	return &EtcdBackend{
		driver:     "etcd",
		etcdClient: etcd.NewClient(etcdNodes),
	}
}

func (e *EtcdBackend) WatchProxyChanges(notifyC chan proxy.ApiProxySpec, stopC chan bool) {
	watchC := make(chan *etcd.Response, 50)
	go e.etcdClient.Watch(ETCD_API_PROXY_DIR, 0, true, watchC, stopC)
	for change := range watchC {
		if change != nil {
			p, err := newProxyFromJson([]byte(change.Node.Value))
			if err != nil {
				logutils.Info("[etcd_backend] Incorrect encoding for the found ApiProxy definition ")
			}
			notifyC <- p
		}
	}
	logutils.Info("Lost connectivity with etcd cluster")
}
