package main

import (
	"fmt"
	"os"

	"github.com/codegangsta/cli"
	cmd "github.com/jteso/envoy/apictl/commands"
)

func main() {
	os.Exit(realMain())
}

func realMain() int {
	app := cli.NewApp()
	app.Name = "APICTL"
	app.Usage = "Control Your APID deamon"
	app.Version = "0.1"
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "pidpath",
			Usage: "Location of the `apid.pid` file (Default: Current directory)",
		},
	}
	app.Commands = []cli.Command{
		{
			Name:  "proxy",
			Usage: "Operations with proxies",
			Subcommands: []cli.Command{
				{
					Name:   "ls",
					Usage:  "List of all proxies registered on the server",
					Action: cmd.PrintProxyNamesCmd,
				},
			},
		},
		{
			Name:  "server",
			Usage: "Operations with main server",
			Subcommands: []cli.Command{
				{
					Name:   "stop",
					Usage:  "Stop the server gracefully",
					Action: cmd.StopServerCmd,
				},
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error executing CLI: %s\n", err.Error())
		return 1
	}
	return 0
}
