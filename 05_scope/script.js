// Scope -_______++++++++++++++++++++++
// scope determines the accessibility of varianles , Objects , amd functions from differents part of the code .

// function Scope ++++++++++++++++++++++++=
// variable defined inside a function are not accessible (visible) from outside the function



function intro() {
    let name = "Shiva";  // not access from outside of function
}
intro();
// console.log(name) // error name is not defined



let sum = 100;                  // global scope 

function cal() {
    let sum = 20 + 30;           //function scope
    console.log(sum);
}

console.log(sum);






/// ++++++++++++++++++++++++++++  Block Scope ++++++++++++++++++++++++
//Variables declared inside a {} block cannot be accessed from outside the block.

{
    let num1 = 120;
}
// console.log(num1);  // Errror num1 is not defined



for (let i = 1; i <= 5; i++) {
    console.log(i);             // block scope
}
// console.log(i); // error i is not defined






// +++++++++++++++++++++++++++++  Lexical Scope  ++++++++++++++++++
// A variable defined outside a function can be accessible inside another function defined after the variable declaration.
//  The Opposite is NOT true


// function outer(){
//     let a =10;
//     let b = 20;
//     function inner(){
//         console.log(a); // lexical scope
//         console.log(b);
//     }
//     inner();
// }
// outer();




function outer() {
    let a = 10;
    let b = 20;
    function inner() {
        let x = 40;
        console.log(a); // lexical scope
        console.log(b);
    }
    inner();
    // console.log(x); //x is not defined
}
outer();





// +++++++++++++++++    Funtion Expression  +++++++++++++++++++++

const hello = function () {
    console.log("Hello World!")
}
hello();

let sub = function (a, b) {
    console.log(a - b);
}
sub(23, 19);








// +++++++++++++++  Higher Order Function ++++++++++++++++
//A function that does one or both
//   * takes one or multiple functions as arguments
//    * returns a function  

function greet() {
    console.log("Good Morning!");
}

function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}
multipleGreet(greet, 5);

function oddEvenTest(request) {
    if (request == 'odd') {
        return function odd(n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == 'even') {
        return function even(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong Request!");
    }
}

let oddFun = oddEvenTest("odd");
oddFun(11);









// Methods +++++++++++++

// let calculator = {
//     add: function (a, b) {
//         return (a + b);
//     },
//     sub: function (a, b) {
//         return (a - b);
//     },
//     mul: function (a, b) {
//         return a * b;
//     }
// }

// console.log(calculator.add(12, 13));
// console.log(calculator.sub(20, 10));
// console.log(calculator.mul(10, 5));



calculator = {
    add(a, b) {
        return (a + b);
    },
    sub(a, b) {
        return (a - b);
    },
    mul(a, b) {
        return a * b;
    }
}

console.log(calculator.add(10, 10));
console.log(calculator.sub(10, 10));
console.log(calculator.mul(10, 10));



// ---------- write a javascript function to extract unique characters from a string.
//str = 'abcdabcdefgggh';
// ans= 'abcdefgh'

let str = 'ksuusudkdabcdabcdefggghhia';

function uniqueChar(input) {

    let ans = '';

    for (let i = 0; i < input.length; i++) {
        if (ans.indexOf(input[i]) == -1) {
            ans = ans + input[i];
        }
    }
    return ans;
}

console.log(uniqueChar(str));




// --------- write a javascript function that accepts a list of a country names as input and return the longest country name as output.
// country = ['Australia','Germany','United States of America'];
// output = "United states of America".

let country = ['Australia', 'Germany', 'United States of America'];

function longestName(countries) {
    let longCountryName = countries[0];
    for (let i = 0; i < countries.length; i++) {
        if (longCountryName.length < countries[i].length) {
            longCountryName = countries[i];
        }
    }
    return longCountryName;
}

let longest_country_name = longestName(country);
console.log(longest_country_name);




// -------- write a javascript function to count the number of vowels in a String arguments.
str = 'Shivshankar_Agrahari';

function vowelNum(name) {
    let str = name.toLowerCase();
    let numberOfVowel = 0;
    for (char of str) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            numberOfVowel++;
        }
    }
    return numberOfVowel;
}

console.log(vowelNum(str));



// write a javascript function to generate the random number within a range (start , end).

function randomNum(start, end) {
    let range = end - start;
    let random = Math.floor(Math.random() * (range + 1)) + start;
    return random;
}

console.log(randomNum(5, 10));
console.log(randomNum(7, 18));
console.log(randomNum(9, 13));
