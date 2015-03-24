page_title: Modules Documentation - Static
page_description: Static Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 The `static` module acts as a lightweight file server, that you can use to serve your files (js, css, html...)
 from a given local path.

 Params:

  - `only`: files that satisfied this regex will be served, otherwise `404` error is returned
  - `path`: absolute path to lookup for the file


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
- static: {filter: string, //only files that match this regex will be served
           location: string // absolute path to lookup for the file }
```

## Example

```
- static: {filter: "[^\\\\s]+(\\.)(?i)(ico|jpg|gif|bmp|png|css|js|html|md)$",
           location: "/opt/gopath/src/github.com/jteso/envoy/examples/www"}
```

## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




