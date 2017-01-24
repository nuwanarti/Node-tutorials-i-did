var WebSocketServer = require("ws").Server; // start the web socke server
var wss = new WebSocketServer({ port: 3000 });// on the port 3000 .. init the server..

wss.on("connection", function(ws) {// trigger the event on connection

	ws.on("message", function(message) {// trigger the envet on message...

		if (message === 'exit') {
			ws.close();// close the socket on the message exit..
		} else {

			wss.clients.forEach(function(client) {// delever the message for all the users on the chat app..
				client.send(message);
			});

		}

	});

	ws.send("Welcome to cyber chat");

});
