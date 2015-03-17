# APID
When all you need to manage your API/microservices architecture is a daemon.

## Use
Configure a api proxy for each configuration file found in current directory:
```
$ apid start | stop | restart
$ apid --conf-path=./etc/configuration.yaml start
$ apid --log-level=debug
$ apid --standalone | etcd

```

## Example of middleware configuration

Example.yaml
```
base_dir: /dgw-dev
port: "80:_"    

policies:
	- dev_policy:
		- debug
		- cors:{enabled: true}

middlewares:
	- new_dgw:
	    pattern: /login
	    policy:
		  - $dev_policy
		  - mock_endpoint: {api-blueprint: "./login.md"}

	- legacy_dgw:
	    pattern: *
	    policy:
		  - $dev_policy
		  - rate_limit: {rate_ps: 10}
		  - http_endpoint: {url: http://pdgw.company.com}
```

## apictl commands

```
apictl --ls


 MiddlewareName    RouterEntry     Status
 -------------------------------------------
 ReadAccount       GET /account    Enabled
 UpdateAccount     POST /account   Enabled



apictl --cat=readAccount

Middleware: <ReadAccount>
Status: <Enabled>
AttachedPolicy:
    - basic_auth: {username: "test", password: "test"}
    - http_endpoint: {url: "http://localhost:5000"}




```
