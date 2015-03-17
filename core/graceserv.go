package core

import (
	"fmt"
	"log"
	"net"
	"sync"
	"time"

	"github.com/jteso/envoy/logutils"
)

type GracefulServer struct {
	stopCh    chan bool
	waitGroup *sync.WaitGroup
}

func NewGracefulServer() *GracefulServer {
	gs := &GracefulServer{
		stopCh:    make(chan bool),
		waitGroup: &sync.WaitGroup{},
	}
	gs.waitGroup.Add(1)
	return gs
}

func (gs *GracefulServer) Serve(listener *net.TCPListener) {
	defer gs.waitGroup.Done()
	for {
		select {
		case <-gs.stopCh:
			logutils.Info(fmt.Sprintf("Stopping listening on %s", listener.Addr()), false)
			listener.Close()
			return
		default:
		}
		listener.SetDeadline(time.Now().Add(1e9)) // todo - read duration via server options
		conn, err := listener.AcceptTCP()
		if nil != err {
			if opErr, ok := err.(*net.OpError); ok && opErr.Timeout() {
				continue
			}
			logutils.Error("%s", err)
		}
		logutils.Info("%s connected", conn.RemoteAddr())
		gs.waitGroup.Add(1)
		go gs.serve(conn)
	}
}

func (gs *GracefulServer) Stop() {
	close(gs.stopCh)
	gs.waitGroup.Wait()
}

// Serve a new connection.
func (gs *GracefulServer) serve(conn *net.TCPConn) {
	defer conn.Close()
	defer gs.waitGroup.Done()
	for {
		select {
		case <-gs.stopCh:
			log.Println("disconnecting", conn.RemoteAddr())
			return
		default:
		}
		conn.SetDeadline(time.Now().Add(1e9))
		buf := make([]byte, 4096)
		if _, err := conn.Read(buf); nil != err {
			if opErr, ok := err.(*net.OpError); ok && opErr.Timeout() {
				continue
			}
			log.Println(err)
			return
		}
		if _, err := conn.Write(buf); nil != err {
			log.Println(err)
			return
		}
	}
}

//
//func main() {
//
//	// Listen on 127.0.0.1:48879.  That's my favorite port number because in
//	// hex 48879 is 0xBEEF.
//	laddr, err := net.ResolveTCPAddr("tcp", "127.0.0.1:48879")
//	if nil != err {
//		log.Fatalln(err)
//	}
//	listener, err := net.ListenTCP("tcp", laddr)
//	if nil != err {
//		log.Fatalln(err)
//	}
//	log.Println("listening on", listener.Addr())
//
//	// Make a new service and send it into the background.
//	service := NewService()
//	go service.Serve(listener)
//
//	// Handle SIGINT and SIGTERM.
//	ch := make(chan os.Signal)
//	signal.Notify(ch, syscall.SIGINT, syscall.SIGTERM)
//	log.Println(<-ch)
//
//	// Stop the service gracefully.
//	service.Stop()
//
//}
