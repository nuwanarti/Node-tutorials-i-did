var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];//arrays of questions

var answers = [];

function ask(i) { // custom function which i defined
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) { // gettting user input data from the terminal

	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit(); // terminate the process
	}

});

process.on('exit', function() { // event listener on the process....// when process exit event trigger this method

	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);

	process.stdout.write("\n\n\n\n");

});

ask(0); // ask the first question
