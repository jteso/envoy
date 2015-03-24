page_title: Modules Documentation - Exec
page_description: Exec Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 Module `exec` will execute via `exec.Command` any arbitrary executable file and it will return the standard output on a
 HTTP Response.


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
- exec: {command: "path/to/command/executeThis.sh"}
```


## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




