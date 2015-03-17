package main

import (
	"fmt"
	"io/ioutil"
	"os"

	"github.com/codegangsta/cli"
	"github.com/jteso/envoy/api"
	"github.com/jteso/envoy/config"
	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
	"github.com/jteso/envoy/mbundler"
)

func CmdStart(c *cli.Context) {
	logutils.Info("Loading all available modules...")
	mbundler.LoadModules()

	logutils.InitFileLogger(c.GlobalString("log"), c.GlobalString("level"))

	configFiles := config.GetConfFilesInPath(c.String("conf-dir"))
	addr := fmt.Sprintf(":%d", c.Int("p"))
	ngn := core.NewEngine(addr, configFiles)
	withSSl := c.Bool("with-ssl")

	fmt.Printf("==> API listening on port :9090...\n")
	apify(ngn)

	fmt.Printf("==> Starting the server...\n")
	ngn.Start(withSSl, c.String("cert-file"), c.String("key-file"))
}

func stop(c *cli.Context) {
	//StopContainer()
}
func addModule(c *cli.Context) {
	// example of argument: "access"
	mbundler.ImportModule(c.Args().First())
}

func apify(engine *core.Engine) {
	go api.Run(engine)
}

func writePid(pidPath string) {
	ioutil.WriteFile(pidPath, []byte(fmt.Sprint(os.Getpid())), 0644)
}
