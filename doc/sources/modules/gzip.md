page_title: Modules Documentation - GZip
page_description: Gzip Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 The `gzip` module compresses responses using the `gzip` method. This often helps to reduce the size of the transmitted data by half or even more.



## Where
This module is only applies to the downstream flow.

```
+------------------------------+
| Action        |    Module    |
+-------------  | ------------ +
| onRequest     |              |
| onResponse    |      X       |
+------------------------------+
```

## Sintaxis

```
- gzip: {}
```


## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




