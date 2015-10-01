package modinit

import (
	_ "github.com/kapalhq/envoy/modules/mod_access"
	_ "github.com/kapalhq/envoy/modules/mod_basic_auth"
	_ "github.com/kapalhq/envoy/modules/mod_exec"
	_ "github.com/kapalhq/envoy/modules/mod_http_lb"
)

func AutoLoad() {
	//invoked only for the collateral effects: registering all modules
}
