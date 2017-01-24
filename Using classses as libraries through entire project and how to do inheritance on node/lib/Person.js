var EventEmitter = require('events').EventEmitter;// this is the person class.. and import event module
var util = require('util');// importing util module

var Person = function(name) { // class of the person
	this.name = name;
};

util.inherits(Person, EventEmitter); // using util module to inherit the parents to child classes

module.exports = Person; // exporting the class person so we can use classs person as a lib through the entire project..
// class person will be available on the entire project
