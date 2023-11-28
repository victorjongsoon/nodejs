var url = require('url'); 
var fs = require('fs'); // file system module

exports.get = function (req, res) {
    req.requrl = url.parse(req.url, true); // true to get query as object
    var path = req.requrl.pathname; // get path from url
    if (/\.(css)$/.test(path)) { // check if it is css file
        res.writeHead(200, { 'Content-Type': 'text/css' }); 
        fs.readFile(__dirname + path, 'utf8', function (err, data) {
            if (err) throw err;
            res.write(data, 'utf8'); // write file data to response
            res.end();
        });
    } else {
        if (path === '/' || path === '/home') {
            require('./controllers/home').get(req, res); // call home controller
        } else {
            require('./controllers/404').get(req, res); // call 404 controller
        }
    }
}
