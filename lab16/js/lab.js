//Kalyn Daum


// make a button!
var button = $("<button>");

//what does she say?
button.html("No Touch");

//put her in the div baybe
$("#output").append(button);

//what she do
button.click(function(){
	alert("I Said no Touch!!!!! Bad! >:(" );
});

//oh yea green, thanks for the color code Wes
button.css("background-color", "#a8d973");