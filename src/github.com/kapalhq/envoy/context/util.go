package context

import "time"

/*********************************
 * Aux
 *********************************/

func DateTimeNow() string {
	return time.Now().Format(time.RFC3339)
}
