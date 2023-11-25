const http = require('http');

/**
 * Creates an HTTP server that responds with "Hello World" to all requests.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const server = http.createServer((req, res) => {
  res.end('Hello World')
})

server.listen(4001, () =>{
  const {address, port} = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
})