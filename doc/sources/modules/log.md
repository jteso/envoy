page_title: Modules Documentation - Log
page_description: Log Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 The `log` module writes custom messages to a local disk. A common use of this module is to debug any issues you may
 find with your API proxies.

 *Note:* Currently only file logging is supported and no rotation policy has yet implemented.


## Where
This module will be processed on the request and response (upstream and downstream flow).

```
+------------------------------+
| Action        |    Module    |
+-------------  | ------------ +
| onRequest     |      X       |
| onResponse    |      X       |
+------------------------------+
```

## Sintaxis

Besides static content, you may be interested in accessing to some runtime *Variables* by appending the symbol: `$variable`.

```
- log: {upstream: []string,
        downstream: []string}
```

## Example

```
- log: {upstream: ["Authorization header is ", "$request.header.Authorization"],
        downstream: ["Response Code= ", "$response.status"]}
```
## Variables

- `$request`: Prints the full http request
- `$request.proto`:	Prints the protocol of the request
- `$request.body`: Prints the http request body
- `$request.path`: Prints the http request path
- `$request.uri`: Prints the http request URI
- `$request.verb`: Prints the http request method (GET, POST,...)
- `$request.header.?`: Prints the content of a given header (ex. `$request.header.Authorization`)
- `$request.headers.count`: Prints the number of http request headers
- `$request.headers.names`: Prints all the http headers
- `$request.queryparam.?`:
- `$request.queryparams.count`:
- `$request.queryparams.names`:
- `$request.querystring`:
- `$request.formparam.?`:
- `$request.formparam.count`:
- `$request.formparam.names`:

- `$response`:
- `$response.proto`:
- `$response.body`:
- `$response.status`:

- `$proxy.id`:
- `$proxy.method`:
- `$proxy.policy.size`:
- `$proxy.pattern`:
- `$container.latest.flow_id`: Latest execution Id of a given HTTP Proxy

- `$http.server.port`:
- `$http.server.read_timeout`:
- `$http.server.write_timeout`:

- `$system.timer.year`:
- `$system.timer.month`:
- `$system.timer.day`:
- `$system.timer.hour`:
- `$system.timer.min`:
- `$system.timer.sec`:
- `$system.timer.nano`:

## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




