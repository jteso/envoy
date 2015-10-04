// This package contains the reverse proxy that implements http.HandlerFunc
package engine

import (
	"fmt"
	"net/http"
	"time"

	"os"
	"os/signal"
	"syscall"

	"github.com/kapalhq/envoy/config"
	"github.com/kapalhq/envoy/handler"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/proxy"
)

// This is the main server - the main building block
type Engine struct {
	HttpServer *http.Server
	// Internal logger
	logger *logutils.Logger
	errorC chan error
	sigC   chan os.Signal
}

func NewWithConfig(httpAddr string, backend config.Backend) *Engine {
	ngnConfigurable := New(httpAddr)
	go func() {
		errC := config.NotifyOnChange(backend, ngnConfigurable)
		for err := range errC {
			logutils.InfoBold("[ERROR] Lost connectivity with etcd. Envoy will not accept further changes on the config file until this problem is resolved: %s", err.Error())
		}
	}()
	return ngnConfigurable
}

func New(httpAddr string) *Engine {
	httpServer := &http.Server{
		Addr:           httpAddr,
		Handler:        handler.New(),
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	e := &Engine{
		HttpServer: httpServer,
		logger:     logutils.FileLogger,
		errorC:     make(chan error),
		sigC:       make(chan os.Signal, 1),
	}

	return e
}

func (e *Engine) StartHttp() error {
	return e.rawStart(false, "", "")
}

// Run is a convenience function that runs Engine as an HTTP
// server.
func (e *Engine) rawStart(ssl bool, certFile string, keyFile string) error {
	go func() {
		logutils.InfoBold("Server ready and listening on port%s", e.HttpServer.Addr)
		if ssl {
			e.errorC <- e.HttpServer.ListenAndServeTLS(certFile, keyFile)
		} else {
			e.errorC <- e.HttpServer.ListenAndServe()
		}

	}()

	//Block until either a signal or an error is received
	// based on service.go of vulcand project
	signal.Notify(e.sigC, syscall.SIGTERM, syscall.SIGINT, os.Kill, syscall.SIGUSR2, syscall.SIGCHLD)

	for {
		select {
		case signal := <-e.sigC:
			switch signal {
			case syscall.SIGTERM, syscall.SIGINT:
				fmt.Printf("\n")
				logutils.Info("Received signal: %s!, shutting down gracefully...", signal)
				// put me a supevisor here
				logutils.InfoBold("Server stopped")
				//cleanupDone <- true
				return nil
			case syscall.SIGUSR1:
				return nil
				//default:
				//	fmt.Printf("Ignoring signal: `%s`", signal)
			}
		case err := <-e.errorC:
			logutils.Info("Internal HttpServer Error: %s", err)
		}
	}
}

func (e *Engine) OnChangeProxy(target proxy.ApiProxySpec) {
	logutils.Info("Engine received a OnChangeProxy event!!")
}
