let numbers = [5, 5, 10, 10, 10, 14];

let arrayAverage = (arr) => {
    let sumOfNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfNumbers += arr[i];
    }
    return (sumOfNumbers / arr.length);

}

// console.log(arrayAverage(numbers));



let isEven = n => {
    if (n % 2 == 0) {
        return "even";
    } else if (!(n % 2 == 0)) {
        return "odd"
    }
}
// console.log(isEven(0));
// console.log(isEven(1));
// console.log(isEven(2));


const object = {
    message: 'Hello Message',
    localMessage() {
        console.log(this.message);
    }
}

// setTimeout(object.localMessage, 1000);




/// ==================
let length = 4;
function callback() {
    console.log(this.length);
}

const objectFun = {
    length: 5,
    method(callback) {
        callback();
    },

}

objectFun.method(callback, 1, 2);