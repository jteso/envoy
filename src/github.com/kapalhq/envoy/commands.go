package main

import (
	"github.com/codegangsta/cli"
	"github.com/kapalhq/envoy/config"
	"github.com/kapalhq/envoy/engine"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/modinit"
)

var etcdNodes = []string{"http://localhost:4001"}

func CmdStart(c *cli.Context) {
	logutils.Info("Loading all available modules...")
	modinit.AutoLoad()

	ngn := engine.NewWithConfig(":8080", config.NewEtcdBackend(etcdNodes))

	logutils.Info("Starting the server...")
	ngn.StartHttp()
}
