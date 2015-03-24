page_title: Getting Started
page_description: Getting Started
page_keywords: envoy, introduction, documentation, about, technology, understanding

## Getting Started

Before diving into the development of your first proxy, please [install the latest version of `envoy`](installation.md).

As an example, let's encapsulate an arbitrary script execution on a REST HTTP endpoint, and protect the call with basic authentication.

**Steps**

- Step 1: Define your proxy

Edit and save the following snippet as **proxy-script-conf.yaml**
```
proxies:
   my_script:
     pattern: "/exec/clean"
     method: POST
     policy:
       - basic_auth: {username: "user", password: "changeMeNow"}
       - exec: {command: "/opt/scripts/clean-up.sh"}
``` 

- Step 2: Run envoy
If you have not installed yet 
```
$ envoy start --conf-dir="path/to/dir/proxy-script-conf.yaml"
``` 

- Step 3: Test it!

```
$ curl -i -X POST -u user:changeMeNow  http://127.0.0.1/exec/clean
```


