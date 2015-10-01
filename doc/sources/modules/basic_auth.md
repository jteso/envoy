page_title: Modules Documentation - Access
page_description: Basic Auth Module
page_keywords: module, introduction, documentation, about, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
The `basic_auth` module protects the calls to your upstream endpoints by performing a HTTP basic access authentication for
incoming requests.

This module will look for the `Authorisation` Header as per spec [RFC2617](http://tools.ietf.org/html/rfc2617)

## Where
This module will be processed on the request (upstream flow) only.

```
+------------------------------+
| Action        |    Module    |
+-------------  | ------------ +
| onRequest     |      X       |
| onResponse    |              |
+------------------------------+
```

## Sintaxis

```
- basic_auth: { username: string,
                password: string }
```

## Examples

```
- basic_auth: { username: "jteso",
                password: "changeMe" }
```

## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




