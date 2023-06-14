function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

function UserProto() {
    this.getFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

User.prototype = new UserProto()

const us1 = new User('John', 'Doe', 59);
const us2 = new User('Jane', 'Doe', 65);