package chain

// import (
// 	"strings"

// 	"github.com/kapalhq/envoy/modules"
// 	"github.com/kapalhq/envoy/modules/params"
// 	"github.com/kapalhq/envoy/registry"
// )

// type ModuleWrapper struct {
// 	moduleName string
// 	module     modules.ModuleSpec
// }

// func (bm ModuleWrapper) GetName() string {
// 	return bm.moduleName
// }

// func (bm *ModuleWrapper) SetName(name string) {
// 	bm.moduleName = name
// }

// func (bm ModuleWrapper) IsReference() bool {
// 	return strings.HasPrefix(bm.GetName(), "$")
// }

// func (bm ModuleWrapper) GetModule() modules.ModuleSpec {
// 	return bm.module
// }

// func NewModuleWrapper(moduleName string, params params.ModuleParams) *ModuleWrapper {
// 	return &ModuleWrapper{
// 		moduleName: moduleName,
// 		module:     registry.GetModule(moduleName, params),
// 	}
// }
// func NewEmptyModuleWrapper() *ModuleWrapper {
// 	return &ModuleWrapper{}
// }

// type ModuleChain struct {
// 	ModuleWrappers []ModuleWrapper
// }

// //func (mc *ModuleChain) addModule(item ModuleWrapper) {
// //	mc.items = append(mc.items, item)
// //}

// func NewModuleChain() *ModuleChain {
// 	return &ModuleChain{ModuleWrappers: make([]ModuleWrapper, 0)}
// }

// type Policy struct {
// 	Name        string
// 	ModuleChain *ModuleChain
// }

// func NewPolicy(name string) *Policy {
// 	return &Policy{
// 		Name:        name,
// 		ModuleChain: NewModuleChain(),
// 	}
// }

// func (p1 *Policy) InsertPolicyModules(priority int, p2 *Policy) {
// 	existing := p1.ModuleChain.ModuleWrappers
// 	in := p2.ModuleChain.ModuleWrappers

// 	// create a new slice
// 	result := make([]ModuleWrapper, len(existing)+len(in))
// 	// copy the lower part of the slice
// 	copy(result[:priority+1], existing[:priority+1])
// 	// insert the new modules
// 	copy(existing[priority:], in[:])
// 	// copy the upper part of the slice out to make space for the new modules (in)
// 	copy(result[priority+len(in):], existing[priority:])

// 	p1.ModuleChain.ModuleWrappers = existing
// }

// func (p1 *Policy) GetModule(priority int) modules.ModuleSpec {
// 	return p1.ModuleChain.ModuleWrappers[priority].GetModule()
// }
// func (p1 *Policy) AppendModuleWrapper(mwin *ModuleWrapper) {
// 	p1.ModuleChain.ModuleWrappers = append(p1.ModuleChain.ModuleWrappers, *mwin)
// }
