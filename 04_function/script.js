// function defination 
function funcName() {
    //do something
}

// Execute function or call  the funtion
funcName();  // print the output


function hello() {
    console.log("Hello World!");
    console.log('My Name Is Shiva');
}
hello();


function print1To10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

print1To10();


function isAdult() {
    let age = 11;
    if (age >= 18) {
        console.log(`your age ${age} go for voting .`);
    } else {
        console.log(`your age ${age} not allow for voting`);
    }
}

isAdult();


// creaate a function to roll a dice & and always display the value of the dice 1 to 6.
function roll() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
}
roll();

// Function with Arguments 
function Info(name, age) {
    console.log(`${name}'s age ${age}`);
}

Info("shiva", 25);
Info("Ritika", 23);
Info("Raghav");  // age = undefined


function sum(a, b) {
    console.log(a + b);
}

sum(8, 5);
sum(17, 45);
sum(12, 34);


//Create a function that give us the average of 3 numbers.
function calAvg(a, b, c) {
    let avg = (a + b + c) / 3
    console.log(avg);
}
calAvg(12, 34, 21);
calAvg(7, 4, 8, 10, 6, 4);


//create a function that prints the multiplication table of a number.

function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
table(10);
table(5);

function printTable(n) {
    for (let i = n; i <= 10 * n; i += n) {
        console.log(i);
    }
}
printTable(4);
printTable(9);


// Return Keyword
console.log("Using Return Keyworld");
function multiply(arg1, arg2) {
    let multi = arg1 * arg2;
    return multi;
}

console.log(multiply(10, 5));
let val = multiply(multiply(4, 5), 6);
console.log(val);


function sum(a, b) {
    console.log('Hello Shiva');
    return (a + b);
    console.log('Byyy Shiva');
}
console.log(sum(4, 23));

// create a function that returns the sum of numbers from 1 to n.

function sumOfNumber(n) {
    let totalSum = 0;
    for (let i = 0; i <= n; i++) {
        totalSum += i;
    }
    return totalSum;
}

console.log(sumOfNumber(5));

// create a function that returns the concatenation of allstrings in an Array
let arr1 = ["apple", "red", "mango", "yellow", "watermelon", "green"];

function concatArray(arrr) {
    let result = "";
    for (let i = 0; i < arrr.length; i++) {
        result += arrr[i];
    }
    return result;
}
let getString = concatArray(arr1);
console.log(getString);