/**
 * Creates an HTTP server that reads the contents of a file asynchronously and sends it as a response.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('test.txt', function (err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'}); // 500 is the HTTP status code for Internal Server Error
            res.end('500 - Internal Server Error');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'}); // 200 is the HTTP status code for OK
            res.end(data);
        }
    });
}).listen(8999);