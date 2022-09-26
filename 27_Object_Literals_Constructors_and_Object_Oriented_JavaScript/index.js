console.log('Hello........');

// Object literal for creating object
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        return 'Car is running.'
    }
}

// console.log(car);
// console.log(car.name);
// console.log(car.topSpeed);
// console.log(car.run());
// console.log(car.run());


// creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running soo fast.`);
    }
    this.analyze = function () {
        return `This car is slower by ${200 - this.speed} km/h then Marcedes`;
    }
}

// creating object for GeneralCar constructor
car1 = new GeneralCar('Maruti Alto', 190);
console.log(car1.name);
console.log(car1.speed);
console.log(car1.run());
console.log(car1.analyze());