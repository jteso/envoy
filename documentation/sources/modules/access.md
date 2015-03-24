page_title: Modules Documentation - Access
page_description: Access Module
page_keywords: module, introduction, documentation, about, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
The `access` module  limits the access to your API to certain client addresses.
If request is denied this module will intercept the request by returning: `HTTP 403 Forbidden` error.

## Where
This module will only be processed on the request (upstream flow). It is recommended to place
this module at the begginig of your policy.

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
- access: { allow: []string,
            deny:  []string
          }
```

## Examples

Allow only requests from client IPs: `10.5.5.5` and `10.3.3.3`
```
- access: { allow: ["10.5.5.5", "10.3.3.3"],
            deny: ["*"] }
```

## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




