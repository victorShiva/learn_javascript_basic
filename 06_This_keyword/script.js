
// +++++++++  "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name: "shiva",
    age: 25,
    math: 96,
    eng: 88,
    phy: 85,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3
        console.log(`${this.name} got avg marks = ${Math.floor(avg)}`);
        console.log(this);
    }
}
// student.getAvg();




function getAvg() {
    console.log(this);           // in the browser 'this' keyword is refer to "window" object  .
}
// getAvg();
// window.getAvg();    //this is execute in browser console , this is same as getAvg();




//++++ ++++++++ try & catch  ++++++++++++ 
// the Try statement allows to you define a block of code to be tested for errors while it is being executed.
//the catch statement allow you to define a block of code to be executed , if an eor occurs in the try block .

// let a = 10;
console.log("first");
console.log("first");
try {
    console.log(a);
} catch (e) {
    console.log('a is not define');
    // console.log(e);
}
console.log("second");
console.log("second");



///+++++++++++++  Arrow Function ++++++++++++++
const sum = (a, b) => {
    console.log(a + b);
}
sum(2, 4);

const multi = (a, b) => {
    return a * b;
}
console.log(multi(8, 6));




// ++++ Implicit Return +++++++

const sub = (a, b) => a - b;
// console.log(sub(12, 7));


const div = (a, b) => (a / b);
console.log(div(54, 8));

const greet = () => console.log('Good Morning');
greet();


// ******************* setTimeout ***********

// console.log("Hello Good Morning");
// setTimeout(() => {
//     console.log("My Area!");
// }, 5000);
// console.log("wellcom to ");


// ***********  setInterval *************

// console.log("Good evining");
// const id = setInterval(() => {
//     console.log("Happy journey!");  // every 2 second execute
// }, 2000);
// console.log("Bye Bye ");



// setTimeout(() => {
//     clearInterval(id);
//     console.log("After 20 second clear the interval");
// }, 20000);


// ***************** this with Arrow Function   **********************

const x = 5;                    //  x's scpoe => global scope(window object)


const boy = {
    name: "raunak",
    marks: 21,
    fav: this,                           // global scope (window object)
    getName: function () {
        console.log(this);                 //boy object
        console.log(this.name);             // boy.name
    },
    getMarks: () => {
        console.log(this);                   // global scope (window object)
        console.log(this.marks);             // global.marks => undefined 
    },
    getInfo1() {
        setTimeout(() => {
            console.log(this);              //boy object
        }, 2000)
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);              //global object (window object)
        }, 2000)
    }
}
console.log(boy.fav); // global object

boy.getName();
boy.getMarks();  // parent scope of scope
boy.getInfo1();
boy.getInfo2();


