// home task

const user = {
    name: 'John',
    age: 30, 
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: {
        email: 'john@example.com',
        phone: '123456789'
    }
}

// name, city, email, phone

const { name: userName,
        address: {
            city: userCity
        },
        contacts: {
            email: userEmail, phone: userPhone
        }
} = user;

console.log(userName);
console.log(userCity);
console.log(userEmail);
console.log(userPhone);