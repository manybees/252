/*
*Author: Wes Modes
*Atributed to Wes Modes
*/

// sortUserName - a function that sorts user input

function sortUserName() {
	var userName = window.prompt("Hello, give name :).");
	console.log("userName= ",userName )

//spilt array
	var nameArray= userName.split('');
	console.log("nameArray = ", nameArray);

//sort array
	var nameArraySort= nameArray.sort();
	console.log("nameArraySort= ", nameArraySort );

// join back to string
	var nameSorted= nameArraySort.join();
	console.log("nameSorted=", nameSorted);

//
	return nameSorted;
}

// output
document.writeln("Here is your new Designation: ", sortUserName(), "<br>");