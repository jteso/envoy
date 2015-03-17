package main

import (
compress/gzip
io
os
//fmt
log
net/http
)

func main() {
client := new(http.Client)

request, err := http.NewRequest(Get, http://stackoverflow.com, nil)
if err != nil {
log.Fatal(err)
}
request.Header.Add(Accept-Encoding, gzip)

response, err := client.Do(request)
if err != nil {
log.Fatal(err)
}
defer response.Body.Close()

// Check that the server actual sent compressed data
var reader io.ReadCloser
switch response.Header.Get(Content-Encoding) {
case gzip:
reader, err = gzip.NewReader(response.Body)
if err != nil {
log.Fatal(err)
}
defer reader.Close()
default:
reader = response.Body
}

// print html to standard out
_, err = io.Copy(os.Stdout, reader)
if err != nil {
log.Fatal(err)
}

}

