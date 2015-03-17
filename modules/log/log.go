// Used primarily for debugging purposes.
// It will log the value of any header specified by parameter
// Use:
// ```
// - log: {
// 			output: ./log/debug.log
// 		    upstream: ["This is the authorization:", "$request.header.authorization", "."],
// 		    downstream: ["Http status code is:", $response.]
//   }
// ```
package log

import (
	"net/http"

	"bytes"
	"strings"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/logutils"
)

type MsgLog struct {
	upstream   []string
	downstream []string
}

func (msgLog *MsgLog) ProcessRequest(c core.FlowContext) (*http.Response, error) {
	logMessage(msgLog.upstream, c)
	return nil, nil

}

func (msgLog *MsgLog) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	logMessage(msgLog.downstream, c)
	return nil, nil
}

func NewLog(params core.ModuleParams) *MsgLog {
	return &MsgLog{
		upstream:   params.GetArray("upstream"),
		downstream: params.GetArray("downstream"),
	}
}

func logMessage(pattern []string, c core.FlowContext) {
	var buffer bytes.Buffer
	for _, s := range pattern {
		vble, yes := isVariable(s)
		if yes {
			buffer.WriteString(c.GetValue(vble))
		} else {
			buffer.WriteString(s)
		}
	}
	logutils.FileLogger.Debug(buffer.String())
}

func isVariable(part string) (vble string, ok bool) {
	if strings.HasPrefix(part, "$") {
		return part[1:], true
	}
	return "", false
}

func init() {
	core.Register("log", NewLog)
}
