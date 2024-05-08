let arr = ["aman", 'kailash', 'rahul', 'jogi', 'salu', 'ravi'];
let print = function (el) {
    console.log(el);
}

arr.forEach(print);

let arr1 = [
    {
        name: "rahul",
        age: 32,
        fav: "selling"
    },
    {
        name: "ravi",
        age: 41,
        fav: "tarning"
    },
    {
        name: "manoj",
        age: 51,
        fav: "gooring"
    }
];
let newArr1 = arr1.forEach((val) => {
    // console.log(val.age);
    return val.age;
})
console.log(newArr1);



/// +++++++++++++ map()++++++++++++++
console.log(` +++++++++++++ map()++++++++++++++`);

let arr2 = [4, 32, 45, 22, 7, 12, 8];
let newArr2 = arr2.map((val) => {
    console.log(val);
    return val;
})
console.log(newArr2);


arr1 = [
    {
        name: "rahul",
        age: 32,
        fav: "selling"
    },
    {
        name: "ravi",
        age: 41,
        fav: "tarning"
    },
    {
        name: "manoj",
        age: 51,
        fav: "gooring"
    }
];

let nameArr1 = arr1.map((val) => {
    return val.name;
})
console.log(nameArr1);



/////**************filter ()******************** */
console.log(`**************filter ()******************** *`);
let num = [4, 32, 45, 22, 7, 12, 8, 13, 54, 223, 56, 31, 61];
let even = num.filter((val) => val % 2 == 0);
console.log(even);


/// ++++++++++++++++++++++++++ every() ++++++++++++ as AND operator
let n1 = [2, 4, 6, 8];
let result = n1.every((val) => (val % 2 == 0));
console.log(result);


n1 = [2, 4, 6, 8, 5];
result = n1.every((val) => (val % 2 == 0));
console.log(result);

n1 = [61, 3, 13, 7, 5];
result = n1.every((val) => (val % 2 != 0));
console.log(result);



n1 = [2, 4, 6, 8, 5];
result = n1.some((val) => (val % 2 != 0));
console.log(result);



/// ****************** reduce() *********************\
console.log(` ****************** reduce() *********************`);
n1 = [2, 4, 6, 8, 5];
result = n1.reduce((prev, val) => {
    return prev * val;
})
console.log(result);


num = [4, 32, 45, 22, 7, 1];
let largeValue = num[0];
for (let i = 0; i < num.length; i++) {
    if (largeValue < num[i]) {
        largeValue = num[i];
    }
}
console.log(largeValue);


let max = num.reduce((pre, curr) => {
    if (curr > pre) {
        return curr;
    } else {
        return pre;
    }
}
);
console.log(`max : ${max}`);


// +check if all numbers in our array are multiples 10 or not

num = [10, 20, 30, 40, 70, 10];
result = num.every((val) => (val % 10 == 0));
console.log(result);

// create a function to fin the min number in a array

num = [10, 20, 30, 12, 23, 9, 40, 70, 1, 10];
function minNumber(arr) {
    let small = arr.reduce((prev, curr) => {
        if (prev < curr) {
            return prev;
        } else {
            return curr;
        }
    })
    return small;
}
console.log(minNumber(num));

//default parameter in function
let multi = function (a, b = 5) {
    return a * b;
}
console.log(multi(10));