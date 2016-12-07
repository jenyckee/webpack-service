var express = require('express')
var webpack = require('webpack')
var http = require('http')

var server = http.createServer();
var app = express();

function updateSandbox(req, res, next) {
  res.send("<div></div>")
}

app.post('/api/sandbox', updateSandbox);


server.on('request', app);
server.listen(process.env.NODE_ENV === 'production' ? process.env.PORT : 4000);
