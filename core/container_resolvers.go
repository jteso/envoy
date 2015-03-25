package core

import "strconv"

var HttpContainerResolvers = map[string]func(ContainerSpec, string) string{
	"container.latest.flow_id": ResolveLastRequestId,
}

func ResolveLastRequestId(c ContainerSpec, param string) string {
	return strconv.FormatInt(c.GetLastRequestId(), 64)
}
