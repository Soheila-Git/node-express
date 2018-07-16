// Handling HTTP request with Express
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello from Express Server!</<h1>')
});

var server = app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});