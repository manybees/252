//Kalyn Daum
//Compare and Sort Based on Letters?
// using wess's example

// The 4 Judgments
 var typeArray = [
    
{ //obj 0
  title: "Clown" ,
  text:"Please remove yourself from the area, this is a strict No Clown zone, violaters will be slapped." },

{ //obj 1
  title: "Bird" ,
  text:"What a lovely creature! Have some birdseed you beautiful baby." },

{ //obj 2
  title: "3 Pieces of String" ,
  text:"Hmmmm... Have you tried existing in a diffirent way?" },

{ //obj 3
  title: "Дpyг" ,
  text:"Ḫ̷̡̢̮̲͔̣̙̩̮͐̓̋̀͂͜ͅä̶̢̡̲̳̞̯́͂͘͠h̶̬̦͖͐͒̀̌̉͜͠à̵̧̢̼̮͔͍̤͉̹̙͉̑̂̍͘̕ͅͅ ̸̛͔̦̣̠͓̼̝̯̭͆͜Y̴̬̻͔͍̹̭̊̿̀̾̄ớ̶̧̮̳͖̬̼ͅu̸̧̢̢̞̘̹̙͈̞͋̃̐̃̔̚ ̴̛̯͙̮͔̫̺̣̱̤̳̍̂́͆͋̿̔̌̊͠F̸͈̥̿͌͐̅̈̀̓̃͝͝o̵͇̠̼͆̏̓̍͋̈́̄́̋̕͘ŏ̵̪̘̻͓̥̃͗̄l̶͎̦̦͕͖̝̮̯̜͈͋̀͂͑̽̚,̷̢̙̰͖̣̟̹̀̐̈́̈́̌̿͝͝ ̵̛̯͉̦̲̮̃͂͑͊͆̓͛̃̌̕͝Y̵̨̪͉̝͎͍͉͖͚͔͗̓̋̿͗̏̎̚͠o̸̧̹̦͉͚̺̝͓̠̠͖͆͘ṷ̴̢̮͉̀̎͗̇̓̔͊́̉̈́̑̋̚ ̷͔̮̳̰̘̙̼̯̽͋̈́̒̂B̵̢͒̂̋̔́̀̓̓ǔ̸̮̺f̸̮̣̈́̃̿̆͗̂͆͐́͜f̸͕͓̳̎̑͋̇̋̀̀͑̔͜ơ̴͍̱̫̮͇̹̥͇͔͈͓̂̃̉͛͝ṋ̸̡͔̟̤̟̱̙̫̪́͊̓̎́̎̕͝,̶̫͉̳̬͋̒͊̎͌͊̋͌͝ ̸͎̻̠̥͓̣̭̃̌̌̂̌̈́̅I̴̛̪͔̙̜͉̯̖̯͓̻̬͈͆̍͆̋ͅ ̵̻͍̻͓̊̌̾͊͒̀͊͝w̴̨̡̡̫͕͉̦͎̲͓͂͒̅̀͒̄̌͛͌͘͝a̷̤̟̠̭̯͕̣͈̞͍͙̽̈́͜s̵̪̰̺̩̥̭̠͈̭͈̀̉̌͆̾̇̿̍̊̈͝ ̴̧̹̣̥̘͔̍̓͌͐h̴̘͉͙͕̰̼̲̠̹̠͈̀͆̏̉̓̂͛̊̈́̕͜͝͠e̷̛͇͋͝r̶̨̧̨̢̬̻̹̱͔̣̘̙̱̆̑͗ẹ̵̛́̏̒̿̓̏̔͛͘̚ ̴̢̺̝͖̫̳̒̇̌̿͒̃̄̇͜͝ą̷̨̢̨͔̯̰̦̳͎͖̭̓̀̔̓̈́̊̄̄̓̈̋̕͘l̷̡̛̖͕̼̭̣̰̲̰͎͑̔̏l̴̜̯̙͖̝̱͚͇͉͍̯͂͛͑̓̊̍̈̊̀͜ ̶̝̃̈́̒̂̃̃́́̈̚̕̕a̸̘̮̪͊̂̀͆̿l̵̛̗̥̰̠͕̮̉͗̌̀̄́̈̌̕o̸̺͙̣̺̱͌̎́̿̌̕n̷̨͍̽̑́́̌͝ͅģ̶̺̺̒́̀̍͌̿͌͑̚.̵̺͖̹̻̯̫̖͍̑̃̏̓̅̍̅̈͒̏͝" },


      ];

//return Clown, Bird, 3 Pieces of String, or Дpyг

function type(str) {
	len = str.length;
	mod = len%4;

	if (mod ==0) 
		{return "Clown"}

	else if (mod == 1)
		{return "Bird"}

	else if (mod == 2)
		{return "3 Pieces of String"}

	else if (mod == 3)
		{return "Дpyг"}
};

//warning, the following is taken from Wess's example, while I understand what some of this does, I don't know everything
// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Given a name, hash the string, and
// return 
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % typeArray.length;//for convineance sake as well as sanity, I kept sortinghat as the function name
  return typeArray[mod];      // returns an object from the array
}


//button time, this button is mine, but there is really only one way to make it anyways so-
var button = document.getElementById('my-button');
button.addEventListener("click", function()	{
    // the input you put into the webpage is a name or some text
			var name = document.getElementById("input").value;
    // need to define what comes out, houseObj refers to what obj you get, 0, 1, 2, or 3
			var houseObj = sortingHatHash(name);
    //AHA I FOUND THE BITCH THAT WAS MESSING IT UP FUCKIN houseObj.title!!!! AAAAAAAAAAAAAAAAAAAAAAAAHHHHH, i made an extra var "group" that should not have existed!!!
			newText = "<p> The Judgment is made. You are assigned "+ houseObj.title + "</p>" + houseObj.text;
  			document.getElementById("output").innerHTML = newText;
		}
	)

//DEBUGGED

