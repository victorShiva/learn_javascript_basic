class Mammal {
    constructor(name) {
        this.name = name;
        this.type = 'warm-blooded';
    }
    eat() {
        console.log(`I am Eating`);
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`Woofff.....`);
    }
}
class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`meow.....`);
    }
    eat() {
        console.log(`Cat is Eating`);
    }
}

const dog1 = new Dog("jonny");
const cat1 = new Cat("london");

console.log(dog1);
console.log(cat1);

console.log(dog1.name);
console.log(dog1.type);
dog1.eat();
dog1.bark();



console.log(cat1.name);
console.log(cat1.type);
cat1.eat();
cat1.meow();
// cat1.bark();                 //error





//   ******** What will be the output for the following code:
class Box {
    constructor(name, l, b) {
        this.name = name;
        this.l = l;
        this.b = b;
    }
    area() {
        let area = this.l * this.b
        console.log(`Box area is ${area}`);
    }
}


class Square extends Box {
    constructor(a) {
        super("Square", a, a);
    }
    area() {
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}

const sq1 = new Square(4);
console.log(sq1);
sq1.area();