package chain

import (
	"net/http"

	"github.com/kapalhq/envoy/context"
	"github.com/kapalhq/envoy/modules"
)

type Chain struct {
	cursor  int
	modules []modules.ModuleSpec
}

func New() *Chain {
	return &Chain{
		cursor:  0,
		modules: make([]modules.ModuleSpec, 0),
	}
}

func NewWithModules(mods []modules.ModuleSpec) *Chain {
	return &Chain{
		cursor:  0,
		modules: mods,
	}
}

func (c *Chain) SetCursor(pin int) {
	if c == nil {
		c = New()
	}
	c.cursor = pin
}

func (c *Chain) GetCursor() int {
	if c == nil {
		c = New()
	}
	return c.cursor
}

func (c *Chain) SetModules(mods []modules.ModuleSpec) {
	if c == nil {
		c = New()
	}
	c.modules = mods
}

func (c *Chain) GetModules() []modules.ModuleSpec {
	if c == nil {
		c = New()
	}
	return c.modules
}

func (c *Chain) AppendModule(mod modules.ModuleSpec) {
	c.modules = append(c.modules, mod)
}

func (c *Chain) InsertModule(priority int, mod modules.ModuleSpec) {
	existing := c.GetModules()

	// create a new slice
	result := make([]modules.ModuleSpec, len(existing)+1)
	// copy the lower part of the slice
	copy(result[:priority-1], existing[:priority-1])
	// insert the new modules
	result[priority] = mod
	// copy the upper part of the slice out to make space for the new modules (in)
	copy(result[priority+1:], existing[priority+1:])

	c.SetModules(result)
}

func (c *Chain) Process(ctx context.ContextSpec) (*http.Response, error) {
	return ProcessChain(c, ctx)
}
