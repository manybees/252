//Kalyn Daum
// based on repl.it example from wess :)!

function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  
  this.info = function() {
    return this.year + " " + this.color + " " + this.make +" " + this.model +" , " + this.extras;
  }
}
//my car
var myCar = new Vehicle("Honda","Fit","2004","Red","Kinda sun bleached, but still works fine!")

    document.getElementById("output").innerHTML += "I drive a  " + myCar.info();