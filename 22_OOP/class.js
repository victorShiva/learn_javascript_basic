

//***************************** Class Constructor ****************
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        console.log(this.name);
        console.log(this.age);
    }
}

const person1 = new Person('shiva', 26);
const person2 = new Person('raghavi', 26);

console.log(person1);
console.log(person2);

person1.getInfo();
person2.getInfo();

console.log(person1.getInfo === person2.getInfo)        //true

*/






//***************************** Inheritance ************************
/*
class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk() {
        console.log(`Hey I am ${this.name}`);
    }
    greeting() {
        console.log(`Hello Good morning ${this.name}`);
    }
}

const student1 = new Student("Ranjeet", 28, 65);
console.log(student1);


class Teacher {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    teach() {
        console.log(`I am teaching ${this.subject}`);
    }
    greeting() {
        console.log(`Hello Good morning ${this.name}`);
    }
}

const teacher1 = new Teacher("Shiva", 26, "Javascript");
console.log(teacher1);

*/



//***************************** Inheritance ************************

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello Good morning ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    talk() {
        console.log(`Hey I am ${this.name}`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`I am teaching ${this.subject}`);
    }
}

const student1 = new Student("Ranjeet", 28, 65);
const teacher1 = new Teacher("Shiva", 26, "Javascript");

console.log(student1);
console.log(teacher1);
student1.greeting();
teacher1.greeting();
student1.talk();
teacher1.teach();


// student1.teach();


console.log(student1.name === teacher1.name);
console.log(student1.talk === teacher1.teach);
console.log(student1.greeting === teacher1.greeting);
