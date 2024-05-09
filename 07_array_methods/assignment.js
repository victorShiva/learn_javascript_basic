// let nums = [4, 8, 3, 2, 6, 9];
// let sum = arr => arr.reduce((prev, curr) => prev + curr);
// console.log(sum(nums));


// Square and sum the array elements using the arrow function and then find the average of the array.
let nums = [4, 8, 3, 2, 6, 9];

let square1 = (arr) => {
    let result = arr.map((val) => {
        return val * val;
    })
    return result;
}
console.log(square1(nums));


let square2 = nums.map((val) => val * val);
console.log(square2);

let sum = nums.reduce((prev, curr) => prev + curr);
console.log(sum);

let average = sum / nums.length;
console.log(average);



// create a new array usingb the map function whose each elements is equal to the original elements plus in 5.
let numbers = [12, 34, 56, 78, 3, 9];
let newNumber = numbers.map((val) => val + 5);
console.log(newNumber);

// create a new aray whose elements are in uppercase of words presents in the original array .
let heros = ['krish', 'salaman', 'shaharukh', 'ranveer'];
let HEROS = heros.map((val) => {
    return val.toUpperCase();
});
console.log(HEROS);


// Write a function called doubleAndReturnArgs which accepts an array and avariable number of arguments.
//The function should return a new array with the original array values and all of the additional arguments doubled.


// function doubleAndReturnArgs(arr, ...args) {
//     let arr2 = args;
//     console.log(arr2);
// }

// doubleAndReturnArgs([2, 4, 6, 1], 12, 46, 78);                  //  [12,46,78]


function doubleAndReturnArgs(arr, ...args) {
    let arr2 = args.map(val => val * 2);
    return [...arr, ...arr2];
}

console.log(doubleAndReturnArgs([10, 20, 30, 40], 2, 6, 3));                // [10, 20, 30, 40, 4, 12, 6] 


/// --- write a function called mergeObjects that accepts two objects and returns a new objects which contains all the keys and values of the first objects and second objects.

let mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}
const myData = {
    name: 'shiva',
    last: 'gupta',
    age: 25,
    fav: ['JavaScript', 'NodeJS', 'React']
};
const contact = {
    mobile: 8805845057175,
    mail: 'shiv@123.gmail.com',
    city: 'Mumbai'
}

console.log(mergeObjects(myData, contact))