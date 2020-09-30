//Kalyn Daum
//Defining Functions
function firstThing(test) {
	console.log (test + " This is the first!")
};
function secondThing(test) {
	console.log (test + " This is the second!")
};
function thirdThing(test) {
	console.log(test + " This is the third!")
}

//Test 1
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Test 2
setTimeout(function(){
	firstThing("Test 2");
} ,0);
setTimeout(function(){
	secondThing("Test 2");
} ,0);
setTimeout(function(){
	thirdThing("Test 2");
} ,0);

//Test 3 2, 3, 1
setTimeout(function(){
	firstThing("Test 3");
} ,3000);
setTimeout(function(){
	secondThing("Test 3");
} ,1000);
setTimeout(function(){
	thirdThing("Test 3");
} ,2000);