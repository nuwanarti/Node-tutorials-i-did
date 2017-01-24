var readline = require('readline'); // import the module readline
var rl = readline.createInterface(process.stdin, process.stdout); // creatin the interface get the input from the user and give an output

var realPerson = { // object of the realperson.... actually this is the class of the real person
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) { // on readline object question is a method..

	realPerson.name = answer;

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt(); // promptin the above question...

	rl.on('line', function(saying) { // event on the readline object

		realPerson.sayings.push(saying.trim()); // push the message into saying array

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt(); // second, third and forth sayings...
		}

	});

});


rl.on('close', function() { // trigger on the event close

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings); // on close event output all the sayings ...
	process.exit();

});
