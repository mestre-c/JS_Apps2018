/**
* Creating a Server
*/
var http = require("http");

// reqest and response objects
// 200 means everything went fine
function process_request(req, res) {

 var body = "Thanks for calling\n";
 var content_legth = body.length;
 res.writeHead(200, {
   'Content-Length' : content_legth,
   'Content-Type' : 'text/plain',
 });

 res.end(body);
}
  
// Create a web server to use process_request function
var server = http.createServer(process_request);
server.listen(8082);
