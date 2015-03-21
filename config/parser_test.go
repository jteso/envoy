package config

import (
	"testing"

	. "gopkg.in/check.v1"
)

var configFile = `
basedir: dgw
port: 80:_
policies:
  default_policy:
    - access: {allow: "192.168.1.0, :::1", deny: "*"}
    - log:
        userdata: [user, age]
    - basic_auth: {username: jteso, password: secr3t}

  otherone:
    - access: {allow: "192.168.1.0, :::1", deny: "*"}

proxies:
  old_dgw:
    pattern: "/v2"
    method: GET
    enabled: true
    policy:
      - $default_policy
      - http_endpoint: {url: "http://pdgw.company.com"}
  legacy_dgw:
    pattern: "*"
    method: ALL
    enabled: true
    policy:
      - rate_limit: {rate_ps: 10}
      - $default_policy
      - http_endpoint: {url: "http://pdgw.company.com"}
`

// go test -test.run="^TestAccess$"
func TestConfig(t *testing.T) { TestingT(t) }

type ConfigSuite struct{}

var _ = Suite(&ConfigSuite{})

func (s *ConfigSuite) TestHappyPath(c *C) {
	err, config := Parse([]byte(configFile))

	c.Assert(err, IsNil)
	c.Assert(config.Basedir, Equals, "dgw")
	c.Assert(config.Port, Equals, "80:_")

	policies := config.Policies
	c.Assert(len(policies), Equals, 2)
	c.Assert(len(policies["$default_policy"].items), Equals, 3)
	c.Assert(len(policies["$otherone"].items), Equals, 1)

	proxies := config.Proxies
	c.Assert(len(proxies), Equals, 2)
	for _, m := range proxies {
		switch m.Id {
		case "old_dgw":
			c.Assert(m.Pattern, Equals, "/v2")
			c.Assert(m.Enabled, Equals, true)
			c.Assert(len(m.AttachedPolicy.moduleChain.items), Equals, 4)
		case "legacy_dgw":
			c.Assert(m.Pattern, Equals, "*")
			c.Assert(m.Enabled, Equals, true)
			c.Assert(len(m.AttachedPolicy.moduleChain.items), Equals, 5)
		default:
			c.Fail()
		}
	}

}
