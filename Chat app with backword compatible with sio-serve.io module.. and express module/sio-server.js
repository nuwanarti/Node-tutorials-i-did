var express = require("express");// require express module..
var http = require("http");//requere http module...
var app = express();// init express...
var server = http.createServer(app).listen(3000);// create the server on the port 3000....
var io = require("socket.io")(server);// backword compatible with socket.io..

app.use(express.static("./public"));// delever the static files on the server with express static file delever service..

io.on("connection", function(socket) {// on conneted event handle as this...

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);// emit the messag to everyone online..
    });

	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://localhost:3000");
