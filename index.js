/*

Уявіть, що у вас є ферма, на якій проживають різні види тварин. У цій фермі є свійські тварини, такі як корови і кози, а також домашні тварини, такі як кошки і собаки.

У кожної тварини на фермі можуть бути свої діти, і кожен з цих дітей також може мати свою власну кількість дітей.

Завдання полягає в наступному:

1. Створити класи для всіх видів тварин і додати можливість встановлювати кількість дітей для кожної тварини.
2**. Реалізувати функцію, яка підраховує загальну кількість тварин на фермі, включаючи дітей і дітей дітей.

Ви можете вирішити це завдання, використовуючи такі кроки:

1. Створити порожній масив ferma, який буде зберігати всі тварини на фермі.
2. Встановити кількість ітерацій, наприклад, змінну N, яка визначає кількість тварин, які ви хочете створити.
3. Зробити N ітерацій.
4. На кожній ітерації створити нову тварину (корову, козу, кота або собаку) і встановити для неї певну кількість дітей.
5. Додати створену тварину в масив ferma.


*/

// фабричний клас для створення тварин
class AnimalsFactory {
    static createAnimal(type) {
        switch(type) {
            case 'cow': return new Cow();
            case 'goat': return new Goat();
            case 'dog': return new Dog();
            case 'cat': return new Cat();
            default: throw new TypeError('Невідомий тип тварини!');
        }
    }
}

// Абстрактний клас, або інтерфейс
class Animal {
    constructor() {
        this.children = [];
    }

    static createAnimals(type, numAnimals, numChildren, numGrandchildren) {
        const animals = [];
        for(let i = 0; i < numAnimals; i++) {
            const animal = AnimalsFactory.createAnimal(type);
            for(let j = 0; j < numChildren; j++) {
                const child = AnimalsFactory.createAnimal(type);
                animal.children.push(child);
                for(let k = 0; k < numGrandchildren; k++) {
                    const grandchild = AnimalsFactory.createAnimal(type);
                    child.children.push(grandchild);
                }
            }
            animals.push(animal);
        }
        return animals;
    }

    static countAnimals(animals) {
        let count = animals.length;
        for(let i = 0; i < animals.length; i++) {
            count += Animal.countChildren(animals[i]);
        }
        return count;
    }

    static countChildren(animal) {
        let count = animal.children.length;
        for(let i = 0; i < animal.children.length; i++) {
            count += Animal.countChildren(animal.children[i]);
        }
        return count;
    }

}

// Конкретні класи собаки, кішки, кози і корови
class Cow extends Animal {
    // Тут можуть бути додаткові властивості та/або методи для конкретних тварин
}

class Goat extends Animal {
    // Тут можуть бути додаткові властивості та/або методи для конкретних тварин
}

class Dog extends Animal {
    // Тут можуть бути додаткові властивості та/або методи для конкретних тварин
}

class Cat extends Animal {
    // Тут можуть бути додаткові властивості та/або методи для конкретних тварин
}

const farm = [...Animal.createAnimals('cow', 5, 5, 5), ...Animal.createAnimals('goat', 5, 5, 5), ...Animal.createAnimals('dog', 5, 5, 5), ...Animal.createAnimals('cat', 5, 5, 5)];

// farm.push(...Animal.createAnimals('cow', 1, 1, 1)); // 3
// farm.push(...Animal.createAnimals('goat', 1, 1, 1)); // 6
// farm.push(...Animal.createAnimals('dog', 1, 1, 1)); // 9
// farm.push(...Animal.createAnimals('cat', 1, 1, 1)); // 12


console.log(farm);
console.log(`Загальна кількість тварин на фермі ${Animal.countAnimals(farm)} тварин.`);