// 1

const arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);

// 2

const arr2 = [1, 2, 3 ,4];
const newArray = arr2.slice(1);

// 3

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'w', 'tr-td');

// variant 1
arr3.splice(6, 0, 'vv');
arr3.push('aa');

// variant 2
// arr3.splice(-1, 1, 'vv', 5, 'aa');