const http = require('http');

// Create a server object
http.createServer((request, response) => {

  // Write a response
  response.write('Hello World');

  response.end();

}).listen(5000, () => console.log('server running'));

