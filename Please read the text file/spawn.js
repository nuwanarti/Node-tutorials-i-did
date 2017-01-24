var spawn = require("child_process").spawn; // include child processes ...

var cp = spawn("node", ["alwaysTalking"]); // define always talking as a child process of this

cp.stdout.on("data", function(data) { // trigger this on the data event  of the child event
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function() { // trigger this method on the close event of the child event

	console.log("Child Process has ended");

	process.exit();

});


setTimeout(function() { // trigger this event on the time out and cloase the child event

	cp.stdin.write("stop");

}, 4000);
