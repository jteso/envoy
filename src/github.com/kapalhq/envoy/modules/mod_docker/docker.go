package mod_docker

import "github.com/kapalhq/envoy/modprobe"

// Syntaxis:
// module "bridge.docker.sock" {
// 	ref="mod_nc"
// 	config {
// 		input  = "$request.line"
// 		target = "/var/run/docker.sock"
// 	}
// }

// Example:
// echo -e "GET /images/json HTTP/1.0\r\n" | nc -U /var/run/docker.sock
//
// printf 'GET / HTTP/1.1\r\nHost: www.example.com\r\nConnection: close\r\n\r\n' | nc www.example.com 80
type ModDocker struct {
}

func init() {
	modprobe.Install("mod_docker", NewDocker)
}

func NewDocker() *ModDocker {

}
