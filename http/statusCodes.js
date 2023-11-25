const http = require('http');

const handleGetRequest = (req, res) => {
  // Set GET status code here
  res.statusCode = 200; // OK status code
  return res.end(JSON.stringify({ data: [] }));
}

const handlePostRequest = (req, res) => {
  // Set POST status code here
  res.statusCode = 500; // Internal Server Error status code
  return res.end("Unable to create record");
}

// Creates server instance
/**
 * Creates a server and handles different HTTP request methods.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @throws {Error} If the request method is not supported.
 */
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    case 'POST':
      return handlePostRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});