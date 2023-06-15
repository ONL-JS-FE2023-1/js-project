class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }

    createPost(header, text) {
        console.log('Post created')
    }

    removePost(postId) {
        console.log('Post removed')
    }

    ban(userId) {
        console.log('User is banned')
    }
}

class Admin extends Moderator {
    constructor(name, surname, isAdmin) {
        super(name, surname, null);

        this.isAdmin = isAdmin;
    }

    createPost() {
        console.log('Not allowed')
    }

    removePost() {
        console.log('Not allowed')
    }

    setModerator(userId) {
        console.log('set moderator')
    }

    deleteModerator(userId) {
        // варіант 1: видаляємо профіль модератора
        // варіант 2: знімаємо з модератора його роль модератора
        console.log('delete moderator')
    }
}

const us1 = new User('John', 'Doe', 59);

const mod = new Moderator('Alex', 'Krane',40);

const adm = new Admin('Jane', 'Doe', true);