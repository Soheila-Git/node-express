// Handling HTTP requests with Node
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello from Node Server!</h1>');
  res.end();
});

server.listen(4000);
console.log('Server is listening on port 4000 ...');