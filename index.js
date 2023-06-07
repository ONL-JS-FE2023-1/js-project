const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'mail.com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'mail2.com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 17,
        email: 'mail3.com'
    }
]



const newUsersArray = users.map((item) => {
    return {
        fullname: `${item.name} ${item.lastName}`,
        age: item.age,
        email: item.email
    }
});