var http_port = 8899;
var http = require('http');

var start = function () {
    var server = http.createServer(function (req, res) {
        /*
        all incoming request from client will be present in req
        when we want to write back to customer, 
        outgoing response from server will be present in res
        */
        require('./router').get(req, res); 
    }); // end server()
    server.listen(http_port); // start listening to port
    console.log('listening to http://localhost:' + http_port);
}; // end start()

exports.start = start; // export start() function
