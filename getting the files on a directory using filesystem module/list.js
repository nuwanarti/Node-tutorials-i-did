var fs = require("fs");// import the file system module

fs.readdir('./lib', function(err, files) {// include the lib directory

	if (err) {
		throw err;
	}

	console.log(files);// logging the output files.. on the terminal...

});

console.log("Reading Files...");
