package api

import (
	"fmt"
	"net/http"

	"github.com/go-martini/martini"

	"github.com/jteso/envoy/core"
)

func GetAllProxies(enc Encoder, api core.EnvoyAPI, parms martini.Params) (int, string) {
	ids := api.GetAllProxies()
	return http.StatusOK, Must(enc.Encode(ids))
}

func GetProxy(enc Encoder, api core.EnvoyAPI, parms martini.Params) (int, string) {
	mid := parms["mid"]
	m, found := api.GetProxy(mid)
	if found == false || m == nil {
		return http.StatusNotFound, Must(enc.Encode(
			NewError(ErrCodeNotExist, fmt.Sprintf("The proxy  with id %s does not exist", parms["mid"]))))
	}
	return http.StatusOK, Must(enc.Encode(m))
}

//// GetMiddlewareExecution returns the status of the requested Middleware Instance.
//func GetMiddlewareExecution(enc Encoder, db dao.MiddlewareDB, parms martini.Params) (int, string) {
//	id, err := strconv.ParseInt(parms["id"], 10, 64) // str, base, #bits
//	if err != nil {
//		panic("I cannot found the bloody pid!!!")
//	}
//	inst, err, found := db.GetInstanceByKeyId(id)
//	if err != nil || found == false {
//		// Invalid id, or does not exist
//		return http.StatusNotFound, Must(enc.Encode(
//		NewError(ErrCodeNotExist, fmt.Sprintf("The middleware instance with id %s does not exist", parms["id"]))))
//	}
//	return http.StatusOK, Must(enc.Encode(inst))
//}
//
//func GetMiddlewareExecutions(enc Encoder, db dao.MiddlewareDB, parms martini.Params) (int, string) {
//	mid, ok := parms["mid"]
//	if ok == false {
//		return http.StatusNotFound, Must(enc.Encode(
//		NewError(ErrCodeNotExist, fmt.Sprintf("The middleware  with id %s does not exist", parms["mid"]))))
//	}
//	aids, err := db.GetAllInstances(mid)
//	if err != nil {
//		return http.StatusNotFound, Must(enc.Encode(
//		NewError(ErrCodeNotExist, fmt.Sprintf("No instances found for the given middleware id: %s does not exist", parms["mid"]))))
//	}
//
//	return http.StatusOK, Must(enc.Encode(aids))
//}
