/* Логічні оператори */

// Boolean

const a = true;
!a; // false 
// ! - заперечення (отрицание)
!!a;
// !! - подвійне заперечення

let b = true;
b = !b;
// console.log(b);

Boolean(); // явне приведення до типу Boolean

const res = 4 > 5; // false
const res2 = 7 < 9; // true

// console.log(res2)

//-------Порівняння рядків

const res10 = 'a' > 'A'; // true: 'a' -> 61, 'A' -> 41 --->>> 61 > 41 -----> true
// console.log(res10);

const res11 = 'word' < 'flower'; // false: 'w' -> 77, 'f' -> 66 --->>> 77 < 66 -----> false
// console.log(res11);

// == - приводить операнди до одного типу даних, і потім порівнює. НЕ РЕКОМЕНДУЄТЬСЯ
const res13 = 5 == 6; // false
const res14 = 6 == 6; // true
const res15 = 6 == '6';
// console.log(res15);

// === - порівнює операнди і за значенням, і за типом даних. РЕКОМЕНДУЄТЬСЯ
const res16 = 5 === '5'; // false
const res17 = 15 === 15; // true
const res18 = 15 === 14; // false
console.log(res18);

/* Більше-або-дорівнює і менше-або-дорівнює */

3 >= 3; // true
3 >= 2; // true

1 >= 2; // false