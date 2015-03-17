BACKPLANE SPECS - DRAFT
=======================
## Elevator Pitch
> X: Taming the hybrid Cloud

A centralized solution around around an integration gateway, ensuring that policies for access control, developer profiles and service lifecycle are enforced in a secured and scalable fashion.
This gateway provides a point of integration to other backend or cloud-based services.

## Market Context
- SOA gravitates toward integration gateways optimized for app development
- SOA focuses on security and governance currently
- API Management can be seen as an extension of SOA.
- Solutions in that space can be divided into two families:
  + Mashery, APIGEE:
    - (+) Simple configurations,
    - (+) Tools for developers
    - (-) Assumptions about services
  + Layer 7:
    - (+) Security
    - (+) Governance

## Challenges of current generation of SOA Gateways
- SOA applications span cloud-based and on-premises services.
- Defitiently management of services across the firewall.
- Existing Hw based solutions (appliances) are problematic for scalability and adoption on private clouds.
- Missing important capabilities: virtual deployment, cloud deliverability and scale, federated and delegated identity management, dev management, cloud spanning operations and metering, extensibility and new message formats and protocols.
- Only focus on XML, SOAP and WS-*
- SSO identity managment tools cant handle new mobile-friendly identity tokens or the multiple layers of identity (user, dev, application) that comes with mobile deployments.

## Desired functionality for new generation of SOA Gateways
- Single solution to manage the heteregonity of services, endpoints and APIs.
- Expose REST-style interfaces for existing SOAP services
- OAuth and OpenId Connect are the new API-centric standards for delegated identiy and attribution. And bridge with SAML-based identity assertions.
- Developer portals to privide a management layer of the service interfaces. Defining access control, metered and potentially monetized.
- Cloud and On-premises solutions.

## Architecture at 14,371 feet
Backplane's architecture consists of an upstream pipeline where stages are run in sequence until a stage returns an HTTP Response. There is a separate downstream pipeline which runs against the response before it is returned to the client. Any stage may be arbitrarily complex, but you'll get extra benefits from breaking your application up into separate modules spread out over stages.

An example request might encounter several filters while traversing a pipeline:

- A authorization filter that performs application specific auth, then either responds with an error or appends auth info to the request's context.

- A router that looks at the request and chooses one of several filters to handle.

- A filter that evaluates cache headers to see the if the response can be served from a local cache.

- A filter that peforms the core functionality of the application, such as rendering a JSON dictionary for an API call.

- A downstream filter that evaluates cache headers and response to determine if the response should be added into the local cache.

- A downstream filter that implements etag/if-none-match comparison.

- A downstream filter that implements gzip/deflate compression if appropriate and possible.

## CLI
List of all commands available:
- `backplane start` - starts the pipeline container
- `backplane stop` - fast shutdown
- `backplane quit` - graceful shutdown
- `backplane reload` - reload any changes on the configuration


## Logical Structure

```
/backplane
  |-- /bin
  |-- /etc  
  |      |-- props.conf
  |      +-- /apis
  |            |-- ./system <-- internal-api
  |            |       |-- system-api.conf
  |            |       |-- policies.conf
  |            |       +-- props.conf
  |            |
  |            +-- /<group_apis>
  |                    |-- <name>-api.conf
  |                    |-- policies.conf
  |                    +-- props.conf
  |
  +-- /var
        |-- <app_name>.pid <-- guid of the pipeline running
        |-- /log
        |     +-- backplane.log
        +-- /run
              +-- /<app_name>
                    |-- /<pid_1>
                    |      +-- app_name.log
                    +-- /<pid_2>
                           +-- app_name.log


```

## Custom APIs Configuration

A policy is a given pipeline of modules that apply to a given endpoint of group of endpoints to meet regulatory or internal requirements.

props.conf
```
[
  {key: oauth_client_id, value: "123412341234"},
  {key: oauth_secret, value="alsjdadsf87689698769asdf==="}
]
```

<name>-api.conf
```
{
  name: "weatherAPI",
  schema_version: "1.0",
  description: "A set of ops to manage the internal weather api",
  label: "weatherAPI_v2",
  base_path: "/v2"
  routes:[
            { path: "/admin",
              method: POST,
              policy: $xxx},
            { path: "/points",
              method: GET,
              policy: $companyDefaultPolicy},
            { path: "/:resource",
              method: *,
              policy: $superSecurePolicy}
        ]          
  ],    
  

```


policies.conf
```
[
        { name: "companyDefaultPolicy",
          filters: [
            "access":{
              "allow": "localhost, 127.0.0.1",
              "deny": "ALL"},
            "oauth":{
              "key":...},
            "http_endpoint":{
              "strategy": "round-robin",
              "pool": "https://host1:8080/v2, https://host2:8080/v2, https://host3:8080/v2"
              "ssl": {
                "keystore": "secret.ks",
                "keyalias": "weather",
                "trustStore": "/ts.jks"
              }
            }
          ]
        },
        { name: "superSecurePolicy",
          filters: [
            "access":{
              "allow": "localhost, 127.0.0.1",
              "deny": "ALL"},
            "oauth":{
              "key":...},
            "http_endpoint":{
              "strategy": "round-robin",
              "pool": "https://host1:8080/v2, https://host2:8080/v2, https://host3:8080/v2"
              "ssl": {
                "keystore": "secret.ks",
                "keyalias": "weather",
                "trustStore": "/ts.jks"
              }
            }
          ]
        }

  }

}

```


## Logging

- `/var/log/backplane.log`: Backplane writes information about encountered issues. Messages from all severity level above the one indicated will be log.
- `/var/run/<app_name>/app.log`: All information about the activity of a middleware.
- `/var/run/<app_name>/<id>/error.log`: On failure of a middleware, the error logs will also be written in this file


## Plugins (Bring Your Own Modules)
- Dynamic: Server side code in JS is available via JS Module
- Static:
  + 1. `go get bitbucket.com/ligrecito/backplane-engine`
  + 2. cp the new module into the `backplane-engine\modules` folder
  + 3. Recreate a new `backplane-engine\modulebundler\load_modules.go` file via template
  + 4. `go install`

## Metrics TODO
Metric Type: Gauge
Metric Name: runtime stats (goroutines, mem, cpu...)

## Internal API
```
> GET /servicesNS/middlewares
Returns the list of middlewares ids currently deployed on the container

> GET /servicesNS/middlewares/:id
Returns the configuration for a given middleware

> GET /servicesNS/middlewares/:id/executions (?last=N)
Return pids of last N invocations

> GET /servicesNS/middlewares/:id/execution/:eid
Return info about this execution

> POST /servicesNS/middlewares/:id?op=create
Create a new middleware based on a given manifest coming in the form data

> POST /servicesNS/:middleware
Runs the middleware

> DELETE /servicesNS/:middleware
Cancel all executions for a given middleware

> DELETE /servicesNS/:middleware?op=(unregister|reload|delete)
Delete the middleware (soft delete/just unregister it from the container)

```

## Appendix

## How to run backplane

1. Define the following environment variable. And make sure it is added to your PATH:
```
BACKPLANE_PATH=<YOUR PATH TO BACKPLANE-DIST PROJECT>; export BACKPLANE_PATH
```

2. Clone the all the projects within the team
3. Go to the `backplane-engine` and execute:
> `go run main.go start`

4. Execute any middleware is defined under the `backplane-dist/middleware`.
### How to quit
1. Gracefully: proxy master will wait for all the workers to stop processing the requests.
2. Fast: proxy master process is being killed.

 *Note*
 Process ID for backplane is written by default to `backplane.pid` in the directory: `/usr/local/backplane/logs` or `/var/run`

In order to send a QUIT signal resulting on a graceful shutdown of backplane, execute:
> `kill -s quit <PID_of_backplane>` or //todo: check if the flag is mandatory
>
> ```kill -s quit `cat /var/run/backplane.pid` ```

For getting a list of all the running backplance processes:
> `ps -aux | grep backplane`



### How to reload
Once master process receives a command to reload the configuration:

1. Check syntax of conf file is valid
2. Master process will spawn a new worker process and it will send a message to old worker processes to shutdown.
3. Worker processes upon receival of a shutdown, will stop accepting new requests and will continue processing the current ones. Once they are finished, the worker process should terminate.

> *Note*
> In case you need to upgrade the binaries on the fly (no downtime):
>
> 1. Replace the binary with a new version
> 2. Send `USR2` signal to the running process: `kill -USR2 <PID_of_backplane>`
> 3. Check that both instances are running
> 4. If everything is ok, will the parent process: `kill <PID_of_parent>`, otherwise kill the child process: `kill <PID_of_child>`

## Performance

### Version 0.1 - SQLite3
```
./wrk -t10 -c10 -d5s http://localhost:8080/load
Running 5s test @ http://localhost:8080/load
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.33ms    2.28ms  23.25ms   90.18%
    Req/Sec     7.91     21.93   100.00     88.10%
  215 requests in 6.01s, 25.62KB read
  Socket errors: connect 0, read 252, write 8, timeout 24
Requests/sec:     35.80
Transfer/sec:      4.27KB
```

### Version 0.2 - PostgreSQL
```
→ wrk -t10 -c10 -d5s http://localhost:8080/load
Running 5s test @ http://localhost:8080/load
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.11ms   34.03ms 142.66ms   90.20%
    Req/Sec   104.01     52.43   241.00     68.51%
  5322 requests in 5.01s, 675.64KB read
Requests/sec:   1062.59
Transfer/sec:    134.90KB


→ wrk -t100 -c100 -d5s http://localhost:8080/load
Running 5s test @ http://localhost:8080/load
  100 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   340.97ms  269.35ms 963.24ms   37.66%
    Req/Sec    11.06     25.42   250.00     94.11%
  4607 requests in 5.11s, 584.87KB read
Requests/sec:    901.65
Transfer/sec:    114.47KB


[No database]
→ wrk -t100 -c100 -d5s http://localhost:8080/load
Running 5s test @ http://localhost:8080/load
  100 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.64ms    0.88ms  15.59ms   77.38%
    Req/Sec   665.38    135.34     1.22k    75.48%
  314707 requests in 4.99s, 39.02MB read
Requests/sec:  63098.21
Transfer/sec:      7.82MB


```

## External Resources
- [Ngnix admin guide / logging and monitoring](http://nginx.com/resources/admin-guide/logging-and-monitoring/)
- [Security Best Pracices](http://www.blackhat.com/presentations/bh-usa-01/Cscottbh/bh-usa-01-cscott-Slides.ppt)
- [CloudFlare](https://www.cloudflare.com)
- [Best pracices webservices in go](http://rcrowley.org/talks/strange-loop-2013.html#50)
- [Develope plugins in Go](https://stackoverflow.com/questions/24839893/plugin-system-for-go?lq=1)
- [Open source API Gateway - Tyk](https://github.com/lonelycode/tyk.git)
- [Text Library indexing in Go](https://github.com/blevesearch/bleve)
- [Good API documentation tool](https://github.com/oauth-io/docs)
- [database choice-rationale](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
- [Restlet] API Spark, the first PAAS dedicated to Web APIs

## Brain Dump
- APIGEE offering on premise is quite obscure. i have not found yet the MYSQL of api managers (WSO2? this is the enterprise version (with software licensing cost!, API Grove by Alatel Lucent open source release only, nobody behind. ApiAxle is a proxy sitting o your network, recently purchase s by Exicon.
- 3Scale and apigee no open source.)

New players: Repose, Tyk, Gluu, StrongLoop --> What does it mean to the API world, what business models exists around these open tools
