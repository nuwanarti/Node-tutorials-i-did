var path = require('path'); //path module
var util = require('util'); // util module
var v8 = require('v8'); // v8 module

util.log( path.basename(__filename) );

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads'); // define the path by concatnate the directory names

util.log(dirUploads);

util.log(v8.getHeapStatistics());
