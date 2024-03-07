function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake;
  this.model = carModel;
  this.color = carColor;
  this.doors = numOfDoors;
  this.honk = function () {
    alert("BEEP BEEP FUCKER");
  };
  this.lock = function () {
    alert(`Locked ${this.doors} doors!`);
  };
}

let hondaCivic = new MakeCar("Honda", "Civic", "Silver", 4);

let teslaRoadster = new MakeCar("Tesla", "Roadster", "Red", 2);
