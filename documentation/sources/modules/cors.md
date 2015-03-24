page_title: Modules Documentation - Cors
page_description: Cors Module
page_keywords: module, introduction, documentation, cors, technology, user, guide, user's, manual, platform, framework, virtualization, home, intro

# Description
 Module `cors` enables you to set fine-grained controls about what cross origin requests your API will accept.
 It follows the recommended standard of the [W3C cors](http://www.w3.org/TR/cors/)

 **NOTE:** If support for preflight request is required, the verb: `OPTIONS` must be included in the list of accepted verbs.


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

```
- cors: { AllowedOrigins: [""] //default: "*"
		  AllowedMethods: [""] //default: GET,POST
		  AllowedHeaders: [""] //default: Accept, Content-Type, Origin
		  ExposedHeaders: [""] //default: ""
		  AllowCredentials: bool //default: false
		  MaxAge: int //default: 0
		  Debug: bool //default: false [NOT IMPLEMENTED YET]
```


## Contribute

We welcome bug fixes, improvements and new features. Just please open an issue and tell us about your intentions first,
we really value your time and we dont want to risk duplicating efforts.




