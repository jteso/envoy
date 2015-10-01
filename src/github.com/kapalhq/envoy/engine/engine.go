// This package contains the reverse proxy that implements http.HandlerFunc
package engine

import (
	"fmt"
	"net/http"
	"time"

	"os"
	"os/signal"
	"syscall"

	"github.com/kapalhq/envoy/handler"
	"github.com/kapalhq/envoy/logutils"
)

// This is the main server - the main building block
// - Container: where all the proxies are living, a container will route all the incoming requests to
// individual proxies, which are user-defined as a pipeline and a endpoint
// - Server: the server that runs the main container as a http handler
// An Engine implements the `Expandable` interface
type Engine struct {
	HttpServer *http.Server
	// Internal logger
	logger *logutils.Logger
	errorC chan error
	sigC   chan os.Signal
}

// httpAddr string takes the same format as http.ListenAndServe.
func New(httpAddr string) *Engine {
	httpServer := &http.Server{
		Addr:           httpAddr,
		Handler:        handler.New(),
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}

	// Populate engine context...
	//	ctx.SetValue(variables.HTTP_SERVER__PORT, httpAddr)
	//	ctx.SetValue(variables.HTTP_SERVER__READ_TIMEOUT, strconv.FormatFloat(httpServer.ReadTimeout.Seconds(), byte('f'), 0, 64))
	//	ctx.SetValue(variables.HTTP_SERVER__WRITE_TIMEOUT, strconv.FormatFloat(httpServer.WriteTimeout.Seconds(), byte('f'), 0, 64))

	e := &Engine{
		HttpServer: httpServer,
		logger:     logutils.FileLogger,
		errorC:     make(chan error),
		sigC:       make(chan os.Signal, 1),
	}

	// give the container a ref to the engine, in case it has to escalate variables that it is unable to resolve by itself
	// httpContainer.SetParent(e)

	return e
}
func (e *Engine) StartHttp() error {
	return e.start(false, "", "")
}

// Run is a convenience function that runs Engine as an HTTP
// server.
func (e *Engine) start(ssl bool, certFile string, keyFile string) error {
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
