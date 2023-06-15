class Animal {
    constructor(color, nickname, breed) {
        this.nickname = nickname;
        this.color = color;
        this.breed = breed;
    }

    eat() {
        return `${this.nickname} is eating`
    }
}

const anim = new Animal('test', 'test', 'test');

class Cat extends Animal {
    constructor(color, nickname, breed, catIsGood) {
        super(color, nickname, breed);

        this.catIsGood = catIsGood;
    }

    sleep() {
        return `${this.nickname} is sleeping`
    }
}

const cat = new Cat('grey', 'Barsik', 'poroda...', true);