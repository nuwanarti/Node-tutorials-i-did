var https = require("https"); // https  module
var fs = require("fs"); // file system modlue

var options = { // options object for the https request
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) { // request the webpage....

	var responseBody = ""; // char sequence of the requested web page

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode} `);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) { // trigger this method at one  time... and log the first chunk of data..
		console.log(chunk);
	});

	res.on("data", function(chunk) { // on the data event trigger this method and add the data chunck to out tempory variable.. response body
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() { // on the end of the reading of the file trigger this method...
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});

});

req.on("error", function(err) { // if error encounts... trigger this method...
	console.log(`problem with request: ${err.message}`);
});

req.end();
