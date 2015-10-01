/*
* EXPERIMENTAL --- It needs to be tested
* @Author: Javier Teso
* From the interesting article: http://grisha.org/blog/2014/06/03/graceful-restart-in-golang/
 */

package httputils

// import (
// 	"exec"
// 	"log"
// 	"net"
// 	"net/http"
// 	"os"
// 	"sync"
// 	"syscall"

// 	. "bitbucket.org/ligrecito/logutils"
// )

// // Fork a process. `Exec.Command` is being used due to the field `ExtraFiles`, which specifies
// // open files(stdin, stdout, stderr) to be inherited by the new process
// func fork(netListener *gracefulListener) {
// 	// duplicate a fd: The duplicated file descriptor will not have the FD_CLOEXEC flag set,
// 	// which would cause the file to be closed in the child (not what we want).
// 	file := netListener.File()
// 	path := "/path/to/exec" // it should be the same as the current one if you are upgrading
// 	args := []string{"-gracefulRestart"}

// 	cmd := exec.Command(path, args...)
// 	cmd.Stdout = os.Stdout
// 	cmd.Stderr = os.Stderr
// 	cmd.Extrafiles = []*os.File{file}

// 	err := cmd.Start()
// 	if err != nil {
// 		log.Fatalf("gracefulRestart: Failed to launch, error: %v", err)
// 	}
// }

// // Start a server. If gracefulRestart is true, this invokation is part of a graceful restart and the
// // child process should reuse the socket rather than trying to open a new one
// func startServer(gracefulRestart bool) {
// 	server := &http.Server{Addr: "localhost:4444"}

// 	var l net.Listener
// 	var err error

// 	if gracefulRestart {
// 		// Listening to existing file descriptor 3.
// 		// Background: The documentation states that “If non-nil, entry i becomes file descriptor 3+i. source: http://grisha.org/blog/2014/06/03/graceful-restart-in-golang/
// 		f := os.NewFile(3, "")
// 		l, err = net.FileListener(f)
// 	} else {
// 		// Listening on a new file descriptor
// 		l, err := net.Listen("tcp", server.Addr)
// 	}

// 	// At this point we are ready to accept requests, but before that, we need to tell our parent to
// 	// stop accepting requests and exit
// 	if gracefulRestart {
// 		parent := syscall.Getppid()
// 		// kill the parent
// 		syscall.Kill(parent, syscall.SIGTERM) // CHANGELOG.md: double check that this signal is closing the listener
// 		// if not, we should handle this signal like over here: github.com/takama/daemon
// 	}

// 	gl = NewGracefulListener(l)
// 	server.Serve(gl)

// }

// // Keep track of all in-progress connections. Used for graceful termination of in-progress requests
// var httpWg sync.WaitGroup

// // gracefulConn is used to keep track of connections being closed
// type gracefulConn struct {
// 	net.Conn
// }

// func (w gracefulConn) Close() error {
// 	httpWg.Done()
// 	return w.Conn.Close()
// }

// // Listener that keep track of all accepted connections.
// // Used to wait for completion of all in-progress requests
// type gracefulListener struct {
// 	net.Listener
// 	stop    chan error
// 	stopped bool
// }

// // Constructor
// func NewGracefulListener(l net.Listener) (gl *GracefulListener) {
// 	gl = &gracefulListener{Listener: l, stop: make(chan error)}
// 	go func() {
// 		_ = <-gl.stop
// 		gl.stopped = true
// 		gl.stop <- gl.Listener.Close() // this will unblock the `Listener.Accept()` by closing the fd
// 	}()
// 	return
// }

// // Override the `Accept` method of the listener, it returns a `gracefulconn`
// func (g *gracefulListener) Accept() (c net.Conn, err error) {
// 	c, err = g.Listener.Accept()
// 	if err != nil {
// 		return
// 	}

// 	c = gracefulconn{Conn: c}

// 	httpWg.Add(1)
// 	return
// }

// // Override the `Close` method of the listener
// func (gl *gracefulListener) Close() error {
// 	if gl.stopped {
// 		return syscall.EINVAL
// 	}
// 	gl.stop <- nil //<- This will unblock the goroutine of the constructor
// 	return <-gl.stop
// }

// // Returns the fd from the `net.TCPListener`
// func (gl *gracefulListener) File() *os.File {
// 	tl := gl.Listener.(*net.TCPListener)
// 	fl, _ := tl.File()
// 	return fl
// }
