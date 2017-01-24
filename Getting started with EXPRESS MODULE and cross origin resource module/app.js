var express = require("express");// including the module express...

var app = express(); // create the instance of the express modulle


app.use(function(req, res, next) { // use function is the base function of the express module..
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));// handle the static requests..


app.listen(3000);// listen on the port 3000

console.log("Express app running on port 3000");

module.exports = app;
