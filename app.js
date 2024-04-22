// Importing required modules
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Define the port on which the server will listen
const port = 3000;

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
