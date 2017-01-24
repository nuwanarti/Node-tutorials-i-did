var http = require("http"); // including http module..
var fs = require("fs"); //file system module

http.createServer(function(req, res) { // creae the server

	if (req.method === "GET") { // if the request method is get.. process as this..
		res.writeHead(200, {"Content-Type": "text/html"});
	    fs.createReadStream("./public/form.html", "UTF-8").pipe(res); // read the file... form.html.
	} else if (req.method === "POST") {// if the request is post.. process as this..

		var body = "";

		req.on("data", function(chunk) {// on data event...
			body += chunk;
		});

		req.on("end", function() {// on the end event

			res.writeHead(200, {"Content-Type": "text/html"});

			res.end(`

				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your Form Results</h1>
						<p>${body}</p>
					</body>
				</html>

			`);


		});


	}



}).listen(3000);

console.log("Form server listening on port 3000");
