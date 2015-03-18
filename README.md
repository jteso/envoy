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

After that, you can run the demo middlewares by executing the following command:
```
$ envoy start --conf-dir=examples
```

