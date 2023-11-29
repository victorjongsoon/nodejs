// import net module from node.js
const net = require('net');
var server = net.createServer(function (connection) {
    console.log('Client connected'); // client connected

    connection.on('end', function (data) { // when client disconnects
        console.log('Client disconnected'); // client disconnected
    });

    connection.write('Hello World!\r\n'); // send data to client (data exchange)

    connection.pipe(connection); // echo back to client
    
});

server.listen(8067, function () {
    console.log('Server is listening'); // server is listening
    console.log('Server started on port: ' + server.address().port);
    
}); // listen on port 8067