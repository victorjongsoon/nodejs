var http = require('http');

// create server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'}); // send response header
    response.end('Hello World...'); // send response body
}).listen(8888);