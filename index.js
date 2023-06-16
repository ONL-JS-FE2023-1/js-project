class Figure { // абстрактний клас
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    getArea() {

    }
}

class Triangle extends Figure { // похідний клас
    constructor(a, b, angle) {
        super(3);

        this.a = a;
        this.b = b;
        this.angle = angle;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if(value < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        if(value < 0) {
            throw new RangeError('Side cannot be less than 0');
        }

        this._b = value;
    }

    get angle() {
        return this._angle;
    }

    set angle(value) {
        //
        this._angle = value;
    }

    getArea() {
        return this.a * this.b * Math.sin(this.angle)
    }
}

class Square extends Figure { // похідний клас
    constructor(a) {
        super(4);
        this.a = a;
    }

    get a() {
        return this._a;
    }

    set a(value) {
        //
        this._a = value;
    }

    getArea() {
        return this.a * this.a;
    }
}


const sq = new Square(4);


function getFigureArea(figure) {
    if(figure instanceof Figure) {
        return figure.getArea();
    }

    throw new TypeError('Параметр не є фігурою!');
}