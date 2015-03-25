package core

import (
	"strconv"
	"time"
)

var EngineResolvers = map[string]func(*Engine, string) string{
	"http.server.port":          ResolveHttpServerPort,
	"http.server.read_timeout":  ResolveHttpServerRdTimeout,
	"http.server.write_timeout": ResolveHttpServerWrTimeout,
	"system.timer.year":		 getSystemTimerYear,
	"system.timer.month":		 getSystemTimerMonth,
	"system.timer.day":		 	 getSystemTimerDay,
	"system.timer.hour":		 getSystemTimerHour,
	"system.timer.min":		 	 getSystemTimerMin,
	"system.timer.sec":		 	 getSystemTimerSec,
	"system.timer.nano":		 getSystemTimerNSec,
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

func getSystemTimerYear(e *Engine, param string) string {
	year, _, _ := time.Now().Date()
	return strconv.Itoa(year)
}

func getSystemTimerMonth(e *Engine, param string) string {
	_, month, _ := time.Now().Date()
	return month.String()
}

func getSystemTimerDay(e *Engine, param string) string {
	_, _, day := time.Now().Date()
	return strconv.Itoa(day)
}

func getSystemTimerHour(e *Engine, param string) string {
	return strconv.Itoa(time.Now().Hour())
}

func getSystemTimerMin(e *Engine, param string) string {
	return strconv.Itoa(time.Now().Minute())
}

func getSystemTimerSec(e *Engine, param string) string {
	return strconv.Itoa(time.Now().Second())
}

func getSystemTimerNSec(e *Engine, param string) string {
	return strconv.Itoa(time.Now().Nanosecond())
}
