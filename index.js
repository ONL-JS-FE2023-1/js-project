// Чейнінг функцій

// Задача: новий масив, кожен елемент якого = елемент зі старого масиву * 2

const array = [2, 3, 4, 5, 1, 2];

const newArray = array.map((item) => {
    return item * 2;
}).reverse().join('<<--->>'); // chaining


// forEach version
// const newArrayVersion2 = [];
// array.forEach((item) => {
//     newArrayVersion2.push(item * 2);
// })
