package core

import "strconv"

//var (
//
//	"server.http.port"
//	"server.http.read_timeout"
//	"server.http.write_timeout"
//	"server.http.uptime"
//
//	"system.timer.year"
//	"system.timer.month"
//	"system.timer.day"
//	"system.timer.dayofweek"
//	"system.timer.hour"
//	"system.timer.minute"
//	"system.timer.second"
//
//)

var HttpContainerResolvers = map[string]func(ContainerSpec, string) string{
	"container.latest.flow_id": ResolveLastRequestId,
}

func ResolveLastRequestId(c ContainerSpec, param string) string {
	return strconv.FormatInt(c.GetLastRequestId(), 64)
}
