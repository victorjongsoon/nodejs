var Server = require('ws').Server; 
var port = process.env.PORT || 9030;
var ws = new Server({port: port});
console.log('websocket server started on port %d', port);

ws.on('connection', function (socket) {
    console.log('client connection established');

    socket.on('message', function (msg) {
        console.log('message received: %s', msg);
        socket.send(msg);
    });

    socket.on('close', function () {
        console.log('client connection closed');
    });
});