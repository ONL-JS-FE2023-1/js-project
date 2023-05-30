// бінарні - 2 операнди
// унарні - 1 операнд
// тернарний - 3 операнди

/*

Тернарний оператор

const result = умова ? операнд1 : операнд2;

*/

const age = 5;
const isAdult = age < 16 ? 'not adult' : 'adult'; // ... ? false : true
console.log(isAdult);

// Задача:

/*

1. Створіть булеву змінну isAuth, в якій самостійно визначте, чи авторизований користувач, чи ні. 
Тобто привласніть цій змінній значення: або true або false.
2. Створіть змінну viewMode, яка у випадку авторизованого користувача має містити рядок 'authMode',
а у випадку неавторизованного - 'unAuth'

*/

const isAuth = true;
const viewMode = isAuth ? 'authMode' : 'unauth'; // isAuth === true