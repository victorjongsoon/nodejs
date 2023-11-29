var http = require('http');

var httpServer = http.createServer(function (req, res) {
    console.log('Message received: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello PM2 Manager\n');
});

httpServer.listen(8080, function () {
    console.log('Server listening on port 8080');
});

console.log('httpServer running at http://localhost:8080/')


