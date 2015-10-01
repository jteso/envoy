package main

import (
	"github.com/codegangsta/cli"
	"github.com/kapalhq/envoy/engine"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/modinit"
)

func CmdStart(c *cli.Context) {
	logutils.Info("Loading all available modules...")
	modinit.AutoLoad()

	logutils.Info("Starting the server...")
	ngn := engine.New(":8080")
	ngn.StartHttp()
}
