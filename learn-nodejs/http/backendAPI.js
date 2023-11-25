const http = require('http');
const https = require('https');

const handleGetRequest = (req, res) => {
  // Write external API request code here
  const options = {
    hostname: 'static-assets.codecademy.com',
    path: '/Courses/Learn-Node/http/data.json',
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    }
  };

  // make external API request
  const request = https.request(options, (response) => {
    // process data received in chunks
    let data = '';
    response.on('data', (chunk) =>{
      data += chunk;
    });

    // when all data is received
    response.on('end', () => {
      // log the data to console
      console.log(data);
      // send the data back to the client
      res.end(data);
    });
  });

  request.end();


}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});