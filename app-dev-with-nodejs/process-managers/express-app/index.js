var express = require('express');
var app = express();

app.get('/listAllStudent', function (req, res) {
    res.send('Page Contains list of all students');
});

app.get('/student/:id', function (req, res) {
    res.send('Request arrived for student. Where * can be anything');
});

var serverInstance = app.listen(9006, function () {
    var hostaddress = serverInstance.address().address;
    var port = serverInstance.address().port;
    console.log('Server listening at http://%s:%s', hostaddress, port);
});