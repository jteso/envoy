package main

import (
	"fmt"
	"github.com/codegangsta/cli"
	"os"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	os.Exit(execute())
}


func execute() int {
	app := cli.NewApp()
	app.Name = "Envoy"
	app.Usage = "A Reverse Proxy on Steroids"
	app.Author = "Javier Teso"
	app.Version = Version
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "level",
			Usage: "Level of logs to report. Valid values are: FATAL, DEBUG, ERROR, WARN, INFO. (Default: INFO)",
		},
		cli.StringFlag{
			Name:  "log",
			Usage: "Location of the log file (Default: current directory)",
		},
	}
	app.Commands = []cli.Command{
		{
			Name: "start",
			Flags: []cli.Flag{
				cli.StringFlag{
					Name:  "conf-dir",
					Value: ".",
					Usage: "Overwrites the default configuration directory. Only `*-conf.yaml` files are been parsed. [Default: current directory]",
					//EnvVar: "APID_CONF
				},
				cli.BoolFlag{
					Name:  "with-ssl",
					Usage: "Listen for only HTTPS connections. [Default: false]",
					//EnvVar: "APID_CONF
				},
				cli.StringFlag{
					Name:  "cert-file",
					Usage: "Certificate used for SSL/TLS connections.",
					//EnvVar: "APID_CONF
				},
				cli.StringFlag{
					Name:  "key-file",
					Usage: "Key for the certificate. Must be unencrypted.",
					//EnvVar: "APID_CONF
				},
				cli.IntFlag{
					Name:  "p,port",
					Value: 8080,
					Usage: "Set which port should Envoy listen to. [Default: 8080]",
				},
			},
			Usage:  "start the container",
			Action: CmdStart,
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error executing CLI: %s\n", err.Error())
		return 1
	}
	return 0
}
