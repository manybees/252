//Kalyn Daum

//lab 15?
// in class example

class Car {
  constructor(brand, model, year, color) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "I have a " + this.carname + " " + this.carmodel + " " + this.caryear + " " + this.carcolor + ".";
  }
}

mycar = new Car("Honda", "Fit", "2004", "red");
mycar.info()

document.getElementById("output").innerHTML += mycar.info();
