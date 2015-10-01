page_title: Modules Documentation - Spike Arrest
page_description: Spike Arrest Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 The `spike_arrest` module protects against traffic spikes by throtling the number of requests to be processed by an API Proxy.


## Where
This module is only applies to the upstream flow.

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
- spike_arrest: {rate_ps: int} // Number of request per second can be handled.
```


## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




