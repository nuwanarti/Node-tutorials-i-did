var EventEmitter = require('events').EventEmitter; // event module
var util = require('util'); // util module

var Person = function(name) { // person class
	this.name = name;
};

util.inherits(Person, EventEmitter);// emit the event// defining custom evnets and event listeners

var ben = new Person("Ben Franklin");

ben.on('speak', function(said) { // define the speak event of the object ben..

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
