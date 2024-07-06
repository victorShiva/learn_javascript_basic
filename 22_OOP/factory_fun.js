
//****************** factory function   ***********

/*
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        getInfo: function () {
            console.log(`${this.name} is ${this.age} years old`);
        }
    }
    return person;
}

const person1 = PersonMaker('shiva', 25);           //copy  
const person2 = PersonMaker('raghav', 28);              //copy
console.log(person1);
console.log(person2);
person1.getInfo();
person2.getInfo();


console.log(person1.getInfo == person2.getInfo);            // false
console.log(person1.getInfo === person2.getInfo);           // false

*/




//  ********************** constructor  function ***********

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function () {
    console.log(`${this.name} is ${this.age} years old`);
}

const person1 = new Person('shiva', 25);
const person2 = new Person('raghav', 28);

console.log(person1);
console.log(person2);
person1.getInfo();
person2.getInfo();

console.log(person1.getInfo == person2.getInfo);            // true

