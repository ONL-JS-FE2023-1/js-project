const user = {
    name: 'John',
    lastName: 'Doe',
    age: 35,
    'favorite color': 'red',
    avatar: 'https://.....'
}

//console.log(`${user.name} ${user.lastName} ${user.age} ${user["favorite color"]} ${user.avatar}`);

// for...in
// НЕ ЦЕЙ for(;;)

/*

for(variable in object) {
    // Код, що виконується для кожної властивості
}

*/

for (let key in user) {
    console.log(`${key} !!!!!! ${user[key]}`); // key !!!!! value
}