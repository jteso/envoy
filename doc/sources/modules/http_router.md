page_title: Modules Documentation - HTTP Router
page_description: HTTP Router Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 Module `http_router` will route incoming request to a pool of http endpoints.

 **Note** Currently there is *only support to 1 member* in the pool. Support for multiple members, different routing policies,
 as well as failover strategies is definitely in the roadmap.


## Where
This module is an upstream endpoint, it will always return to the client. Hence, every module chained
 on the policy after this module will never be executed.

```
+------------------------------+
| Action        |    Module    |
+-------------  | ------------ +
| onRequest     |      X       |
| onResponse    |      X       |
+------------------------------+
```

## Sintaxis

```
- http_router: {url: "http://backend/service"}
```


## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




