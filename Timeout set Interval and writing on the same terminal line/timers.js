var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p) { // method for waiting on the same line
	process.stdout.clearLine(); //clear the current line on the terminal
	process.stdout.cursorTo(0); // move cursor to the beginning of the line
	process.stdout.write(`waiting ... ${p}%`); // writes the percentage on the line
}

var interval = setInterval(function() { // after the defined interval do this again and again in a loop
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() { // after this time... do this one time
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
