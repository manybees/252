/*
*Author: Kalyn Daum
*Public Domain
*/

// define variables

var myTransport = [ "Honda Fit", "Parents", "Bus", "Walking"];


var myMainRide = {
	make: "Honda",
	model: "Fit",
	color: "Red",
	year: 2004,
	age: 16,

}


//output
document.writeln("Kinds of Transports I Use: ", myTransport, "<br>")
document.writeln("My Main Ride: <pre>",

    JSON.stringify(myMainRide, null, '\t'), "</pre>");
