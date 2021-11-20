
const objTeam = {
    name: 'Chicago_Bulls',
};
console.log(objTeam);

const objTeamII = Object.create(objTeam);
objTeamII.wins = 100;
console.log(objTeamII);

const objTeamIII = Object.create(objTeamII);
objTeamIII.playerscount = 8;
console.log(objTeamIII.name);


// objTeamIII.hasOwnProperty(wins);
console.log(objTeamIII.hasOwnProperty('wins'));//false

// ======================================================

const Car = function ({ price,brand, model } = {}) {
    
    this.price = price;
    this.brand = brand;
    this.model = model;
    // this.count = value
};


Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};
 
console.log(Car.prototype);

const premiumCar = new Car({
    price: 40000,
    brand: 'Tesla',
    model: 'modelX',
});

console.log(premiumCar);
premiumCar.changePrice(55000);
console.log(premiumCar);

// new  - make new object without content

const budgetCar = new Car(
    {
    price: 30000,
    brand: 'Audi',
    model: 'A3',
}
);

console.log(budgetCar);

const baseCar = new Car();
console.log(baseCar)
