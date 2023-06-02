//alert('2+2=' + (2+2));
//          2:  1:/4
alert(`2+2 = ${2 + 2}`);


// 2+2=4

// 1 Одинарні лапки - ''
// 2 Подвійні лапки - ""
// 3 Зворотні лапки - ``

const name1 = 'Вася';
const name2 = 'Ігор';
const name3 = 'Дарія';
// alert('Привіт, ' + name); // Привіт, Вася
// alert('Привіт ' + name1 + ', ' + name2 + ', ' + name3 + '!');
alert(`Привіт, ${name1}, ${name2}, ${name3}!`); // Привіт Вася, Ігор, Дарія!
// шаблонний рядок

// Задача: запитати у користувача 2 числа, додати їх, та вивести відповідь алертом

const one = Number(prompt('First number'));
const two = Number(prompt('Second number'));

// alert('-> ' + one + '+' + two + '=' + (one+two));

alert(`-> ${one}+${two}=${one + two}`);
// -> 2+2=4

console.log(`Привіт, ${name1}`);