var express = require('express');
var app = express();
var fs = require('fs');

// GET call will read customers.json file and return the content back to client
app.get('/listCustomers', function (req, res) {
    fs.readFile(__dirname + "/" + "customers.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

var server = app.listen(5555, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("REST app listening at http://%s:%s", host, port)
});