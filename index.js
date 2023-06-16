// Клас Собака +
// Клас Кіт +
// Фабрика - створює екземпляри класу Собака і класу Кіт +

// Абстрактний клас або інтерфейс
class Animal {
    makeSound() {

    }
}

// Конкретний клас для собаки
class Dog extends Animal {
    makeSound() {
        console.log('Гав-гав!')
    }
}

// Конкретний клас для кота
class Cat extends Animal {
    makeSound() {
        console.log('Мяу-мяу!')
    }
}

// Фабричний клас, який створює об'єкти
class AnimalFactory {
    createAnimal(type) {
        switch(type) {
            case 'dog': return new Dog();
            case 'cat': return new Cat();
            default: throw new TypeError('Невідомий тип тварини!')
        }
    }
}

const factory = new AnimalFactory();

// Задача: створити Собаку
const dog = factory.createAnimal('dog');
dog.makeSound();

// Задача: створити Кота
const cat = factory.createAnimal('cat');
cat.makeSound();