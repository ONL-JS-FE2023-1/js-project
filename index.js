// Задача
// Написати функцію, яка приймає об'єкт юзера і повертає:
// Hello та ім'я юзера

function greeting(user) {
    return `Hello ${'name' in user ? user.name : 'Anonym'}`;
}

const user = {
    name: 'John'
}

const user2 = {

}