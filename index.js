/*

Book

- назва книги
- автор
- рік видання
- ціна

- метод визначення ціни зі знижкою

*/

function Book(name, author, year, price) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;

    this.getName = function() {
        return this.name;
    }

    this.getAuthor = function() {
        return this.author;
    }

    this.getYear = function() {
        return this.year;
    }

    this.getPrice = function() {
        return this.price;
    }

    this.setName = function(newName) {
        this.name = newName;
        return this.name;
        // this.getName();
    }

    this.setAuthor = function (newAuthor) {
        this.author = newAuthor;
        return this.author;
    }

    this.setYear = function(newYear) {
        this.year = newYear;
        return this.year;
    }

    this.setPrice = function(newPrice) {
        this.price = newPrice;
        return this.price;
    }

    this.calculateDiscountedPrice = function(discountPercentage) {
        const discountedPrice = this.price - (this.price * (discountPercentage / 100));
        return Number(discountedPrice.toFixed(2));
    }
}

const book1 = new Book('Name 1', 'Author 1', 1951, 10.99);
const book2 = new Book('The Catcher in the Rye', 'Salinger', 1952, 15);