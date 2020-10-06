//Kalyn Daum
//variable
var button = document.getElementById('my-button');
var input = document.getElementById('my-input');
var heading = document.getElementById("heading");

//event
button.addEventListener('click', function() {
 inputValue = document.getElementById('my-input').value;
 console.log("You input:", inputValue);
});

function nameInsert(){

var name = input.value;

 heading.innerText = "Hello, " + inputValue;

}

button.addEventListener('click', nameInsert);
