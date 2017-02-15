var socket = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
var io = socket.listen(server);




app.get("/", function(req, res) {
    res.send("hello world");
});

/*
io.sockets.on("connect", function (client) {

})
*/



var port = process.env.PORT || 8000;
var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});
