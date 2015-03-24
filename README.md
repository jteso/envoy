LATEST DOCUMENTATION CAN BE FOUND [HERE](https://jteso.github.io/envoy/documentation/site/index.html)

Note
===
`Envoy` is under heavy active development at the moment. If you are not afraid of bumpy rides, please read on to learn how to get started.

## Developing Envoy
*... the Vagrant Way*

```
$ vagrant up
$ vagrant ssh
$ cd /opt/gopath/src/github.com/jteso/envoy
$ make
$ bin/envoy
```

note: make will also place a copy of the binary in the first part of your $GOPATH

## Run the example
```
$ envoy start --conf-dir=examples
```
The internal api will be listening on port 9090. Only the following endpoint are available atm:
- `http://10.5.5.5:9090/http/proxies`
- `http://10.5.5.5:9090/http/proxy/{proxy_name}`



