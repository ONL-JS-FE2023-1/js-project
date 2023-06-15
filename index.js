class Car {
    constructor(brand, model, year, fuel) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        if(typeof value !== 'string') {
            throw new TypeError('Brand must be a string!');
        }
        this._brand = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        if(typeof value !== 'string') {
            throw new TypeError('Model must be a string!');
        }
        this._model = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if(typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
            throw new TypeError('Year must be a positive integer')
        }

        this._year = value;
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(value) {
        if(typeof value !== 'number' || value < 0) {
            throw new TypeError('Fuel must be a positive number')
        }

        this._fuel = value;
    }

    drive(distance) {
        // припустиме споживання палива на 10 кілометрів
        const fuelConsumption = 10;
        const fuelNeeded = distance / fuelConsumption; // обчислення кількості палива, яке необхідне, щоб цю відстань пройти

        if(this.fuel >= fuelNeeded) {
            this.fuel -= fuelNeeded;
            console.log(`Подорож на ${distance} км виконана! Палива залишилось: ${this.fuel} л.`)
        } else {
            console.log(`Недостатньо палива для здійснення поїздки`)
        }
    }

    refuel(amount) {
        this.fuel += amount;
        console.log(`Автомобіль заправлено на ${amount} л. Загальна кількість палива: ${this.fuel} л.`)
    }
}

const car = new Car('Lexus', 'Model', 2013, 50);

/*



car.drive(100)
index.js:62 Подорож на 100 км виконана! Палива залишилось: 40 л.
undefined
car
Car {_brand: 'Lexus', _model: 'Model', _year: 2013, _fuel: 40}
car.drive(100)
index.js:62 Подорож на 100 км виконана! Палива залишилось: 30 л.
undefined
car.drive(100)
index.js:62 Подорож на 100 км виконана! Палива залишилось: 20 л.
undefined
car.drive(150)
index.js:62 Подорож на 150 км виконана! Палива залишилось: 5 л.
undefined
car.drive(150)
index.js:64 Недостатньо палива для здійснення поїздки
undefined
car.refuel(150)
index.js:70 Автомобіль заправлено на 150 л. Загальна кількість палива: 155 л.
undefined
car.fuel
155
car.drive(150)
index.js:62 Подорож на 150 км виконана! Палива залишилось: 140 л.


*/