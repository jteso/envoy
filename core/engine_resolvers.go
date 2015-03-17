package core

import "strconv"

var EngineResolvers = map[string]func(*Engine, string) string{
	"http.server.port":          ResolveHttpServerPort,
	"http.server.read_timeout":  ResolveHttpServerRdTimeout,
	"http.server.write_timeout": ResolveHttpServerWrTimeout,
}

func ResolveHttpServerPort(e *Engine, param string) string {
	return e.HttpServer.Addr
}

func ResolveHttpServerRdTimeout(e *Engine, param string) string {
	return strconv.FormatFloat(e.HttpServer.ReadTimeout.Seconds(), byte('f'), 0, 64)
}

func ResolveHttpServerWrTimeout(e *Engine, param string) string {
	return strconv.FormatFloat(e.HttpServer.WriteTimeout.Seconds(), byte('f'), 0, 64)
}
