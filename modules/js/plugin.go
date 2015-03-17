package js

//
// Configures JavaScript code to execute within the context of an API proxy flow.
// Available onRequest and onResponse
//
import (
	"bytes"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/robertkrimen/otto"
)

// Load the plugin file.  If the file does not exist
// then return a nil runtime

func loadPluginRuntime(name string) *otto.Otto {
	f, err := os.Open(name)
	if err != nil {
		if os.IsNotExist(err) {
			return nil
		}
		log.Fatal(err)
	}
	defer f.Close()
	buff := bytes.NewBuffer(nil)

	if _, err := buff.ReadFrom(f); err != nil {
		log.Fatal(err)
	}
	runtime := otto.New()
	// Load the plugin file into the runtime before we
	// return it for use
	if _, err := runtime.Run(buff.String()); err != nil {
		log.Fatal(err)
	}
	return runtime
}
func checkRequestPlugin2(r *http.Request) string {
	runtime := loadPluginRuntime("plugin2.js")

	if runtime == nil {
		return "runtime not found"
	}
	v, err := runtime.ToValue(*r)
	if err != nil {
		log.Fatal(err)
	}

	result, err := runtime.Call("checkRequest", nil, v)
	if err != nil {
		log.Fatal(err)
	}

	object := result.Object()
	if object == nil {
		log.Fatalf("\"checkRequest\" must return an object. Got %s", object)
	}
	response, _ := object.Get("response")
	fmt.Printf("response %+v", response)
	status, _ := response.Object().Get("status")
	statusvalue, _ := status.ToString()

	return statusvalue
}

func checkRequest(r *http.Request) bool {
	runtime := loadPluginRuntime("plugin.js")

	if runtime == nil {
		return false
	}
	v, err := runtime.ToValue(*r)
	if err != nil {
		log.Fatal(err)
	}

	// By convention we will require plugins have a set name
	result, err := runtime.Call("checkRequest", nil, v)
	if err != nil {
		log.Fatal(err)
	}
	// If the js function did not return a bool error out
	// because the plugin is invalid
	out, err := result.ToBoolean()
	if err != nil {
		log.Fatalf("\"checkRequest\" must return a boolean. Got %s", err)
	}
	return out
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// if checkRequest(r) {
		// 	fmt.Fprintf(w, "Welcome in\n")
		// } else {
		// 	w.WriteHeader(http.StatusUnauthorized)
		// 	fmt.Fprintf(w, "Your not allowed!\n")
		// }
		fmt.Fprintf(w, "Json response:%s \n", checkRequestPlugin2(r))
	})

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
