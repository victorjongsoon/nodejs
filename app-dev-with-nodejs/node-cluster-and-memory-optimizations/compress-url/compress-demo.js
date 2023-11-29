var compression = require('compression');
var express = require('express');
var router = express.Router();
var app = express();

function startServer() {
    // compress all requests
    app.use(compression());

    // add all routes
    app.get('*', function(req, res) {
        res.send('<h1>Hello World!</h1>');
    });

    app.use('/', router);
    app.listen(process.env.port || 3000, function() {
        console.log('Server started on port 3000');
    });
}

startServer();
