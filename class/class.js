class Vehicle {

    constructor (name, type) {
        this.name = name;
        this.type = type;
    }

    getName () {
        return this.name;
    }

    getType () {
        return this.type;
    }

}
let car = new Vehicle('Tesla', 'car');
console.log(car.getName()); // Tesla
console.log(car.getType()); // car

class Car extends Vehicle {

    constructor (name) {
        super(name, 'car');
    }

    getName () {
        return 'It is a car: ' + super.getName();
    }

}
let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla

