var express = require('express');
var ws = require('ws');

var app = express(); // create a new express app

// serve static files from the 'public' folder
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/ws.html');
});

// start server on the specified port and binding host
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
