const http = require('http');

/**
 * Represents a URL with various components.
 * @type {string}
 */
const url = 'http://example.com/users/25/projects?type=personal&month=january';

// Make a GET request with the URL and process the response.
http.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
});