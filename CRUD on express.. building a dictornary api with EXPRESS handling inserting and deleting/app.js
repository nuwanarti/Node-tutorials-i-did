var express = require("express"); // include the express module..
var cors = require("cors"); // including cross orgin resource service.. available our files if there is a request from outside of our server...
var bodyParser = require("body-parser"); // body parser module..
var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {// logging the requests to the terminal...
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();// go to the next use function.. if i didnt call next then this server app wont work..
});

app.use(express.static("./public"));// configure express to delever the static files on our server...

app.use(cors()); // init cors...

app.get("/dictionary-api", function(req, res) {// handle if there is a request for the url dictionary-api...
	res.json(skierTerms);
});

app.post("/dictionary-api", function(req, res) {// handle the post request.. add the definition to the json array..
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete("/dictionary-api/:term", function(req, res) { // delete the term ffrom the json arrya..
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
