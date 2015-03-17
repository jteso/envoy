function checkRequest(r) {
   // Only allow GET requests to the API
   return r.Method == "POST";
}



// request: HTTP request passed by the app to the plugin
// Use:
// r.Method == "GET"
//
// Returns:
// If response is nil, the app will execute the next module (plugin or builtin) defined in its pipeline
// If response is not nil, the response will be returned to the client:
//
// HTTP/1.1 200 OK
// Date:
// Server:
// Content-Length: 491
// Keep-Alive: timeout=5, max=100
// Connection: Keep-Alive
// Content-Type: application/json
// 
// { "result": test}
// 
// function OnRequest(request) {
// 	var json_resp = {
// 		"result": "test"
// 	};
// 	return {response: json_resp, error: "string"};
// }

// function OnResponse(request, attempt){

// }

