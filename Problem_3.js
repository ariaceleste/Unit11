
//  Import required module
var http = require("http");

//  Create the HTTP Server
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('Hello World, my name is Aaron R. Lett'); 
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');



