var Person = require("./lib/Person"); // import the custom defined class person

var ben = new Person("Ben Franklin"); // creating new object in the class person
var george = new Person("George Washington");


george.on('speak', function(said) { // defining fucntions on the object.. and events

	console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
