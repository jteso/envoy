package commands

import (
	"errors"
	"github.com/codegangsta/cli"
	"io/ioutil"
	"log"
	"os"
	"strconv"
	"syscall"
)

var ErrNotFoundPID = errors.New("PID cannot be found")

// Middleware Operations

func PrintProxyNamesCmd(c *cli.Context) {
	pid, err := findPID(c)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("PID: %d", pid)
}

// Server Operations

func StopServerCmd(c *cli.Context) {
	pid, err := findPID(c)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Sending stop signal to pid: %d ...", pid)
	syscall.Kill(pid, syscall.SIGTERM)
}

func findPID(c *cli.Context) (int, error) {
	data, err := ioutil.ReadFile(c.GlobalString("pidpath"))
	if err != nil {
		if os.IsNotExist(err) {
			return -1, ErrNotFoundPID
		}
		return -1, err
	}

	pid, err := strconv.Atoi(string(data))
	if err != nil {
		return -1, err
	}
	return pid, nil
}
