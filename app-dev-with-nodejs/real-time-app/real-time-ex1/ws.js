const WebSocket = require('ws'),
    wss = new WebSocket.Server({ port: 40510 });

wss.on('connection', function (ws) {
    console.log('Client connected');

    ws.on('message', function (message) {
        console.log(message);
    });

    setInterval(() => {
        ws.send(`${new Date()}`);
    }, 1000);
});