page_title: Installation
page_description: Installation.
page_keywords: envoy, introduction, documentation, about, technology, understanding

## Installation

Currently `Envoy` must be installed from the sources. Therefore, you'll first need [Go 1.4+](https://golang.org/doc/install) installed. Make sure you have your GOPATH properly set up.

Next, clone the repository: `github/jteso/envoy` into `$GOPATH/src/github.com/jteso/envoy` and then just type `make`. In a few seconds you'll have a working `envoy` executable.

Alternatively, a Vagrantfile can be find inside the repo, so you can start hacking by just typing the usual: `vagrant up`, `vagrant ssh`




