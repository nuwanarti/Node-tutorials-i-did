var fs = require("fs"); // import the module file system

if (fs.existsSync("lib")) { // check if there exists a Directory named lib..
	console.log("Directory already there");
} else {

	fs.mkdir("lib", function(err) { // if not make the Directory..

		if (err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}

	});

}
