
// У нас є функція
function greetingUser(user) {
    return `Hey ${user.name} ${user.surname}. You will be ${user.age + 1} next year`
}

// та у нас є об'єкт
const user = {
    name: 'John',
    surname: 'Doe',
    age: 35
}

/*
Задача:
Написати функцію greetingUser таким чином, щоб вона привітала користувача та вказала,
скільки йому років має виповнитись в наступному році

*/