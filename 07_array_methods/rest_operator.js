/* function sum(a, b, c, d) {
    console.log(arguments);
} 
sum(1, 5, 7, 8, 10);                            // in the browser console in [] form.


function sum() {
    console.log(arguments);                      // collection of arguments values not an array   
    // console.log(arguments.push(1));           // Errror
    arguments.hd = 10;
    console.log(arguments);
}
sum(1, 5, 7, 8);
*/




//  ***********************  ... rest operators   *********************

function sum1(...args) {
    console.log(args);
}
sum1(12, 34, 5, 65, 32, 12);


function sum2(...args) {
    args.push(100);
    console.log(args);                                 // now this is work as Array
}
sum2(12, 34, 5, 65, 32, 12);


function sum(...args) {
    let result = 0;
    for (const val of args) {
        result += val;
    }
    return result;
}
console.log(sum(1, 5, 10));


function largeNum(msg, ...arr) {
    console.log(msg);
    let large = arr.reduce((prev, curr) => {
        if (prev > curr) {
            return prev;
        } else {
            return curr;
        }
    })
    return large;
}
console.log(largeNum("Shiva", 12, 44, 667, 332, 123));





