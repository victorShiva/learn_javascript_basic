//Write a JS program to delete all occurrences of element ‘num’ in a given array.
//if arr=[1,2,3,4,5,6,2,3] & num=2
//arr=[1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] == 2) {
        arr.splice(i, 1);
    }
}
console.log(arr);


// -----------------2--------------
// if number=287152,count=6
let num = 287152
let str = num.toString();
console.log(str.length);


// ---------------3------------
//if number=287152, sum=25
num = 287152
str = num.toString();
let sum = 0;

for (val of str) {
    let int = parseInt(val);
    sum += int;
}
console.log(sum);



// -----------4------------------
// Print the factorial of a number n

num = 10;
let facNumber = 1;
if (num > 0) {
    for (let i = num; i > 0; i--) {
        facNumber = facNumber * i;
    }
    console.log(facNumber);
} else if (num == 0) {
    console.log(1);
} else {
    console.log('Enter positive number');
}

// ------------------
num = 5;
facNumber = 1;
for (let i = 1; i <= num; i++) {
    facNumber *= i;
}
console.log(`num : ${num} of factorial = ${facNumber}`);



// --------------------5-----------
// find largest number in array with positive number
let arr1 = [32, 434, 556, 12, 345, 775, 6473, 376, 433, 657, 897, 323];
if (arr1.length == 0) {
    console.log(0);
}
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) {
        max = arr1[i];
    }
}
console.log(max);


