// Usage:
//	[spike_arrest]
//  rate_ps=1

package rate_limit

import (
	"net/http"
	"time"

	"github.com/jteso/envoy/core"
	"github.com/jteso/envoy/errors"
	"github.com/jteso/envoy/logutils"
)

var (
	statusTooManyRequests = 429 // Not exported yet on go 1.1
)

type SpikeArrest struct {
	minimumInterval    time.Duration
	allowedTrafficTime time.Time
}

func NewSpikeArrest(params core.ModuleParams) *SpikeArrest {
	rps := params.GetInt("rate_ps")
	rpnsec := rps * 1000000000
	mi := time.Duration(rpnsec) * time.Nanosecond
	logutils.FileLogger.Debug("Allowed traffic time: %s", time.Now().Add(mi))
	return &SpikeArrest{
		minimumInterval:    mi,
		allowedTrafficTime: time.Now().Add(mi),
	}
}

func (sa *SpikeArrest) ProcessRequest(ctx core.FlowContext) (*http.Response, error) {
	if time.Now().After(sa.allowedTrafficTime) {
		return nil, nil
	}
	return nil, errors.FromStatus(statusTooManyRequests)
}

func (sa *SpikeArrest) ProcessResponse(c core.FlowContext) (*http.Response, error) {
	sa.allowedTrafficTime = time.Now().Add(sa.minimumInterval)
	return nil, nil
}

func init() {
	core.Register("spike_arrest", NewSpikeArrest)
}
