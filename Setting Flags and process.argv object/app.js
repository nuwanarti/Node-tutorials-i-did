function grab(flag) {
	var index = process.argv.indexOf(flag); // all the infomation about process object available in globally process.argv is the argument object of the property which available all the information of process object
	return (index === -1) ? null : process.argv[index+1];// process.argv is an array.. which contains path info of the process
}// we can set flags to work with the proccess...

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
	console.log("You Blew it!");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}
