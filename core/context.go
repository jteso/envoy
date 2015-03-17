package core

import (
	"strings"
	"time"
)

type Expandable interface {
	GetValue(key string) string
}

type Navigable interface {
	GetParent() Expandable
	SetParent(parent Expandable)
}

/*********************************
 * Aux
 *********************************/

func DateTimeNow() string {
	return time.Now().Format(time.RFC3339)
}

// For example:
// key => `message.req.header.user`
// returns => (`message.req.header.?`, `user`)
func splitKeyParam(key string) (static string, param string) {
	parts := strings.Split(key, ".")

	// extract the param
	y := parts[len(parts)-1]

	// derive the subkey
	parts[len(parts)-1] = "?"
	x := strings.Join(parts, ".")

	return x, y
}
