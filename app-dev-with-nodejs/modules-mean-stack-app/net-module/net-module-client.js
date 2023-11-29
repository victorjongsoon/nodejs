var net = require('net');
var client = net.connect({port: 8067}, function () {
    console.log('Client connected'); // client connected
});

client.on('data', function (data) { // when server sends data
    console.log(data.toString()); // print data from server
    client.end(); // disconnect client
});

client.on('end', function () { // when server disconnects
    console.log('Client disconnected'); // client disconnected
});