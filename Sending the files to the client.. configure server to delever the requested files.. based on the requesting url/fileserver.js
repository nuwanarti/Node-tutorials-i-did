var http = require("http"); // including http module
var fs = require("fs"); // including filesystm module
var path = require("path"); // including path module

http.createServer(function(req, res) { // create the server

	console.log(`${req.method} request for ${req.url}`);

	if (req.url === "/") { // if the reqeusted url is the root...
		fs.readFile("./public/index.html", "UTF-8", function(err, html) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});

	} else if (req.url.match(/.css$/)) { // is the server requesting the css file... a file with the extension css...

		var cssPath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");

		res.writeHead(200, {"Content-Type": "text/css"});

		fileStream.pipe(res);

	} else if (req.url.match(/.jpg$/)) { // handling the files...

		var imgPath = path.join(__dirname, 'public', req.url);// sendign the requeted file to the client... 
		var imgStream = fs.createReadStream(imgPath);

		res.writeHead(200, {"Content-Type": "image/jpeg"});

		imgStream.pipe(res);

	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 File Not Found");
	}

}).listen(3000);


console.log("File server running on port 3000");
