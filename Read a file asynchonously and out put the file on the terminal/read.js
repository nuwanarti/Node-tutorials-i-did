var fs = require("fs"); // include filesystem module
var path = require("path");// include the path module

fs.readdir("./lib", function(err, files) { /// reading the directory and the files.. after reading the file trigger the callback function...

	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store") {

			fs.readFile(file, "UTF-8", function(err, contents) {// read the file and output the contents on the terminal after reading the file

				console.log(contents);

			});

		}
	});

});
