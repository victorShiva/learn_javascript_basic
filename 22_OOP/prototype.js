const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [7, 8, 9, 10, 11, 12];


console.log(arr1);
console.log(arr1.__proto__);
console.log(Array.prototype);




//*********     arr1.__proto__  === Array.prototype   

console.log(arr1.__proto__ === Array.prototype);            //  true
console.log(arr2.__proto__ === Array.prototype);            //  true





// ********************************  set property in Array which all array variable is access that ********************************
arr1.__proto__.greeting = function () {
    console.log("Good Morning");
}


arr1.greeting();
arr2.greeting();
Array.prototype.greeting();
// Array.greeting();                //  error


Array.prototype.allArraygreet = function () {
    console.log("Hello Good Day");
}

arr1.allArraygreet();
arr2.allArraygreet();



// ******************************** Object.protype is parent of all  Array , String and Function ********************************

// String.prototype.__proto__   ===    Object.prototype
// Array.prototype.__proto__    ===    Object.prototype
// Function.prototype.__proto__ ===    Object.prototype

console.log(String.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);




console.log(String.prototype === Object.prototype);         //false
console.log(Array.prototype === Object.prototype);          //false
console.log(Function.prototype === Object.prototype);           //false



console.log(String.prototype === Array.prototype);              //false
console.log(Function.prototype === Array.prototype);              //false




