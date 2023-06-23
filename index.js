// Деструктуризація масивів

const arr = [1,2,3,4,5,6];

const [firstElement, secondElement, ...restOfArr] = arr;

// Деструктуризація Map (впорядкована колекція)

const map = new Map([[1,2], [3,4]]);

const [map1, map2] = map;

/* Деструктуризація вхідних праметрів */

function getFullName({firstName, lastName, ...rest}) { // все інше, окрім firstName, lastName ігнорується
    console.log(rest);
    return `${firstName} ${lastName}`;
}

getFullName({
    firstName: 'Alex',
    lastName: 'Doe',
    phone: '12345',
    email: 'test@gmail.com'
});
