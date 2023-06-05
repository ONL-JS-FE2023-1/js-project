const array = [1,2,3];
const array2 = [3,4,5,6];
const array3 = ['string1', 'string2'];

// concat
// array.concat(array1, array2, arrayN);

const test = array.concat(array2, array3);


// fill
// array.fill(value, start, end);
// value - чим заповнюємо масив
// [start] - звідки очинаємо заповнення
// [end] - до якого елементу заповнюємо масив (не включаючи)
const array4 = new Array(5);
array4.fill(1);


// includes
// array.includes(value, fromIndex);
// value - що ми шукаємо
// [fromIndex] - звідки (з якого індексу) ми починаємо пошук
const array5 = [12,4,15,6,12,12,'ashdhsadlkj'];
console.log(array5.includes(6));

// indexOf
// array.indexOf(value, fromIndex)
// value - що ми шукаємо
// fromIndex - початковий індекс, з якого ми починаємо пошук
console.log(array5.indexOf(12));

const array6 = [undefined];
console.log(array6.indexOf(undefined));