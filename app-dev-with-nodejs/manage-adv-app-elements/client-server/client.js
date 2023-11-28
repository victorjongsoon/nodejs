var http = require('http');

// options to be used by request
var options = {
   host: 'localhost',
   port: '8085',
   path: '/data2.html'
};

// callback function is used to deal with response
var callback = function(response){
   // continously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}