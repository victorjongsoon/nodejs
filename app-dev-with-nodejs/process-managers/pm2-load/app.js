var http =  require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello I am clustered using pm2');
}).listen(6666);