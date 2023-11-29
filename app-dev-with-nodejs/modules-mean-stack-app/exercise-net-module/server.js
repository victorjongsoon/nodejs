var net = require('net');
var server = net.createServer(function (connection) {
    console.log('Client invoked by client'); // client connected

    connection.on('end', function (data) { // when client disconnects
        console.log('Client closed the connection'); // client disconnected
    });

    connection.write('Hello, nice to meet you!\r\n'); // send data to client (data exchange)

    connection.pipe(connection); // echo back to client
});

server.listen(8067, function () {
    console.log('Server is listening'); // server is listening
    console.log('Server started on port: ' + server.address().port);

}); // listen on port 8067