var WebSocketServer = require("ws").Server;// importing web socket module...
var wss = new WebSocketServer({ port: 3000 });// starting web socket service..

wss.on("connection", function(ws) {

	ws.send("Welcome to cyber chat");

});
