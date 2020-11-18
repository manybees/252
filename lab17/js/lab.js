//Kalyn Daum

//Lab16 Button
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


//Lab 17 Buttons(s)
//challenge button
$("#challenge-button").click(function(){
		$("#challenges").css("color", "orange"),
		$("#pc").css("font-size", "50px")
});

//results button
$("#results-button").click(function(){
		$("#results").css("color", "royalblue"),
		$("#pr").css("font-size", "15px")
});

