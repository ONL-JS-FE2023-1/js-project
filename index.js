// Примітиви не мають ані властивостей ані методів


const bool = true; // bool - це просто примітив логічного типу

bool.toString();

/*

1. Створюється об'єкт-обгортка Boolean
obj = new Boolean(true);
obj.toString();
2. Отримуємо результат, а об'єкт-обгортка знищується

*/

// null & undefined -> не мають методів та властивостей

// operation 1

console.time()

console.log('hello'.length)

console.timeEnd();

// operation 2

console.time();

console.log('hello');

console.timeEnd();

/*

const str = 'abracadabra'
undefined
str[0]
'a'
str[1]
'b'
str
'abracadabra'


str.charAt(5) // для повернення символу з рядка за вказаним індексом
'a'
str.charAt(1)
'b'
str.charAt(0)
'a'


str.charCodeAt(2) // використовується для отримання числового значення символу в Юнікоді
114



str.concat(' hello') // використовується для конкатенації двох або більше рядків
'abracadabra hello'
str.concat(' hello', ' ', str);
'abracadabra hello abracadabra'



str.includes('cada'); // чи міститься певний рядок у вихідному рядку
true
str.includes('dog');
false
str.includes('cat');
false
str




'abracadabra'
str.indexOf('c') // використовується для отримання індексу першого входження підрядка в рядку
4
str.indexOf('a')
0




str.repeat(2) // використовується для повторення рядка задану кількість разів
'abracadabraabracadabra'
str.repeat(5)
'abracadabraabracadabraabracadabraabracadabraabracadabra'
str.repeat(10)
'abracadabraabracadabraabracadabraabracadabraabracadabraabracadabraabracadabraabracadabraabracadabraabracadabra'





str
'abracadabra'
str.replace('abra', 'dog'); // використовується для заміни рядка іншим рядком
'dogcadabra'






str
'abracadabra'
str.slice(0, 5) // використовується для вибору частини рядка за допомогою вказаних нами індексів
'abrac'




'       text..a.dasdasd           '.trim() // використовується для видалення пробілів з початку і кінця рядка
'text..a.dasdasd'
'       text..a . d a s d asd           '.trim()
'text..a . d a s d asd'





'hi hi hi'.split(' '); // розбиває рядок на підрядки використовуючи роздільник як точки розриву
(3) ['hi', 'hi', 'hi']0: "hi"1: "hi"2: "hi"length: 3[[Prototype]]: Array(0)
'hi hi hi-hi'.split(' ');
(3) ['hi', 'hi', 'hi-hi']0: "hi"1: "hi"2: "hi-hi"length: 3[[Prototype]]: Array(0)
'hi hi hi hi hi'.split(' ', 3);
(3) ['hi', 'hi', 'hi']0: "hi"1: "hi"2: "hi"length: 3[[Prototype]]: Array(0)
'hi hi hi hi hi'.split(' ');
(5) ['hi', 'hi', 'hi', 'hi', 'hi']



'HElLo'.toLowerCase() // використовується для перетворення всіх символів рядка на нижній регістр
'hello'


'hello'.toUpperCase() // використовується для перетворення всіх символів рядка на верхній регістр
'HELLO'


*/