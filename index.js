const user = {
    name: 'Alex',
    firstName: 'Doe',
    id: 1
}

const user2 = {
    name: 'John',
    firstName: 'Doe',
    id: 2
}

const johnMessages = ['Hello!', 'How are you?'];
const alexMessages = ['Hi!', 'I`m fine!'];


const messageMap = new Map();
messageMap.set(user.id, alexMessages);
messageMap.set(user2.id, johnMessages);

function createMessage(userId, newMessage, messageMap) {
    const userMessages = messageMap.get(userId);
    userMessages.push(newMessage);
}