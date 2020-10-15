//Kalyn Daum

//wes's thing

// a function to do all the hard work of 
// creating a new element and appending it to our output div
// parameters: text - string you want to display
//
//function addNewParagraphToOutput(text) {
    // Find the target element where we want to add something, i.e. the output div, with document.findElementById
    //document.findElementById("output")
    // Create a new element with document.createElement()
    // Give this new element a class or id if needed to style it
    // Change the new element's innerText or innerHTML to whatever we want to display.
    // Append the new element to our target element with appendChild


 
//numbers 1 to 200
for(i=1;i<=200;i++) {

  if (i%15 == 0) {
    console.log("fizzbuzz");
    var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "FizzBuzz";
      output.appendChild(newEl1);
      //thank god for marta oh lord
  }

  else if (i%21 == 0) {
    console.log("fizzBoom!");
	var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "FizzBoom!";
      output.appendChild(newEl1);
  }
  else if (i%35 == 0) {
    console.log("buzzBoom!");
	var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "BuzzBoom!";
      output.appendChild(newEl1);
  }
  else if (i%3 == 0) {
    console.log("fizz");
	var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "Fizz";
      output.appendChild(newEl1);
  }
  else if (i%5 == 0) {
    console.log("buzz"); 
    var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "Buzz";
      output.appendChild(newEl1);
  }
  else if (i%7 == 0) {
  	console.log("Boom!")
  	var newEl1 = document.createElement("h5");
      newEl1.innerHTML = "Boom!";
      output.appendChild(newEl1);
  }

  else {console.log(i);
  	var newEl1 = document.createElement("h5");
      newEl1.innerHTML = i;
      output.appendChild(newEl1);
  }

};
	

