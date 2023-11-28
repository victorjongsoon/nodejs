var connect = require('connect');
var url = require('url');
var app = connect();

/**
 * Middleware function that sends a "Hello from Connect!" response to the client.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Write the first chunk.\n')
    res.write('Write the second chunk.\n')
    res.end('Hello from Connect!');
}

/**
 * Middleware function for logging request details.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function loggingMiddleware(req, res, next) {
    console.log('The request method is: ' + req.method);
    console.log('The request URL is: ' + req.url);
    console.log('Request received at: ' + new Date());
    var queryData = url.parse(req.url, true).query;
    console.log('The query data is: ' + JSON.stringify(queryData));
    console.log('The query parameters are: ' + queryData.name);
    next();
}

app
    .use(loggingMiddleware)
    .use(sayHello)
    .listen(3031);

console.log('Server running at http://localhost:3031/');