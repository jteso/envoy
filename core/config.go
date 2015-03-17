package core

type Config interface {
	GetBaseDir() string
	GetPolicies() map[string]*Policy
	GetMiddlewares() []Middleware
}
