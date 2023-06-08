// task 1

const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },

];

const catNames = catArray.map((cat) => {
    return cat.name;
})

// task 2

const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]

const newUsers = users.map((user) => {
    if(user.age >= 18) {
        return {
            fullname: `${user.name} ${user.lastName}`,
            email: user.email
        }
    }
}).filter((user) => {
    if(typeof user === 'object') {
        return true;
    } else {
        return false;
    }
})

// task 3
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((accumulator, currentValue) => {
    if(currentValue % 2 === 0) {
        accumulator += currentValue;
    }

    return accumulator;
}, 0);