var http = require("http");// importing http module..

var server = http.createServer(function(req, res) { // creating http server.. and after creatign the server trigger the callback function..

	res.writeHead(200, {"Content-Type": "text/html"}); // outputting the response.. writing the response..

	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML Response</title>
			</head>
			<body>
				<h1>Serving HTML Text</h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>
	`);

});

server.listen(3000);// make the server to liisten on the port 3000

console.log("Server listening on port 3000");
