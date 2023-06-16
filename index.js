class Person {
    constructor(fullName, birthYear, gender) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._fullName = value; 
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._birthYear = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._gender = value;
    }

    greeting() {
        let prefix;
        if(this.gender === 'male') {
            prefix = 'Mr.';
        } else if(this.gender === 'female') {
            prefix = 'Mrs.';
        } else {
            prefix = prompt('How should we address you?');
        }

        return `Hello ${prefix} ${this.fullName}`
    }
}

class Student extends Person {
    constructor(fullName, birthYear, gender, admissionYear, studentId, averageGrade) {
        super(fullName, birthYear, gender);

        this.admissionYear = admissionYear;
        this.studentId = studentId;
        this.averageGrade = averageGrade;
    }

    get admissionYear() {
        return this._admissionYear;
    }

    set admissionYear(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._admissionYear = value;
    }

    get studentId() {
        return this._studentId;
    }

    set studentId(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._studentId = value;
    }

    get averageGrade() {
        return this._averageGrade;
    }

    set averageGrade(value) {
        // тут можуть бути якісь перевірки перед встановленням значення
        this._averageGrade = value;
    }

    isExcellentStudent() {
        return this.averageGrade >= 90;
    }

    static calculateAverageGrade(studentsArray) {
        if(studentsArray.length === 0) {
            return 0;
        }

        const totalGrade = studentsArray.reduce((accum, student) => accum + student.averageGrade, 0);

        return totalGrade / studentsArray.length;
    }
}

const person = new Person('John Doe', 1965, 'male');
person.greeting()
// 'Hello Mr. John Doe'


const student1 = new Student('Jane Doe', 1990, 'female', 2019, 'A12345', 95);
student1.greeting();
//'Hello Mrs. Jane Doe'
student1.isExcellentStudent();
// true

const student2 = new Student('Bob McCormick', 1999, 'male', 2018, 'B12345', 65);
const student3 = new Student('Emily Johnson', 1994, 'non binary', 2021, 'C12345', 75);

const students = [student1, student2, student3];
const averageGrade = Student.calculateAverageGrade(students);