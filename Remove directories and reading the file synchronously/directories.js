var fs = require("fs"); // import the filesystem module

fs.readdirSync("./logs").forEach(function(fileName) {// reading logs synchonously...

	fs.unlinkSync("./logs/" + fileName);

});

fs.rmdir("./logs", function(err) { // remove the directory .. which have the logs extention

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});
