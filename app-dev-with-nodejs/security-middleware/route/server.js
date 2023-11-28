var express = require('express');
var app = express();
var port = process.env.PORT || 5555;

// Define Routes
// get an instance of router
var router = express.Router();

// home page route (httpL//localhost:5555)
router.get('/', function(req, res) {
    res.send('im the home page!');
});

// about page route (http://localhost:5555/about)
router.get('/about', function(req, res) {
    res.send('im the about page!');
});

// apply the routes to our application
app.use('/', router);

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    res.send('this is a sample!');
});

app.listen(port);
console.log('Magic happens on port ' + port);