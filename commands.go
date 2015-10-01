package main

import (
	"fmt"

	"github.com/codegangsta/cli"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/modinit"
)

func CmdStart(c *cli.Context) {
	logutils.Info("Loading all available modules...")
	modinit.AutoLoad()
	ngn := engine.New(":8080")
	fmt.Printf("==> Starting the server...\n")
	ngn.StartHttp()
}
