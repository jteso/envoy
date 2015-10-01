/*
* Module that will execute via `exec.Command` any arbitrary executable file and it will return the output embeeded
* into the http body.
 */

package mod_exec

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os/exec"
	"strings"

	"bytes"

	. "github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/logutils"
	"github.com/kapalhq/envoy/modprobe"
	"github.com/kapalhq/envoy/modules/params"
)

func init() {
	modprobe.Install("mod_exec", NewExec)
}

type Exec struct {
	command string
}

func NewExec(params params.ModuleParams) *Exec {
	return &Exec{
		command: params.GetString("command"),
	}
}

func (exec *Exec) ProcessRequest(c ContextSpec) (*http.Response, error) {
	logutils.FileLogger.Debug("Executing command: %s", exec.command)
	output, error := exec_cmd(exec.command)

	if error != nil {
		return nil, error
	}

	if output == nil {
		output = []byte(fmt.Sprintf("Command: %s executed sucessfully", exec.command))
	}

	return &http.Response{
		StatusCode: http.StatusOK,
		Body:       ioutil.NopCloser(bytes.NewReader(output)),
	}, nil
}

func (exec *Exec) ProcessResponse(c ContextSpec) (*http.Response, error) {
	return nil, nil
}

func exec_cmd(cmd string) ([]byte, error) {
	parts := strings.Fields(cmd)
	head := parts[0]
	parts = parts[1:len(parts)]

	return exec.Command(head, parts...).Output()
}
