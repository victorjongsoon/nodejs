var protocol = require("http");

protocol.createServer(function (request, response) {
    /*
    whenever client request sends in a request, this function will be called 
    this specification is what will be displayed in the response header
    200 is the status code and text/html is the content type of the response header
    */
    response.writeHead(200, { 'Content-Type': 'text/html' }); 
    response.end('<h1>Hello World</h1>'); // this is the response body

}).listen(8000); // this is the port number on which the server is listening