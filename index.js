/*

Функція-конструктор Country, яка приймає в якості аргументів:

Властивості:
- назва країни
- популяція
- площа

Метод:
- плотність населення: популяція цієї країни / площу цієї ж країни

*/

function Country(name, population, area) {
    this.name = name;
    this.population = population;
    this.area = area;

    this.getDensity = function() {
        // const result = this.population / this.area; 
        return this.population / this.area;
    }
}

const UK = new Country('United Kingdom', 67.33, 243610);

console.log(UK.getDensity());
