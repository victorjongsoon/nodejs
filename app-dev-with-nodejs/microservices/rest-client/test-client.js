var Client = require('node-rest-client').Client;

var client = new Client();

client.get('https://www.google.com/', function (data, response) {
    console.log('Response received');
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});