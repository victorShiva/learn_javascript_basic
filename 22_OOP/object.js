const stu1 = {
    name: "Aman",
    age: 24,
    marks: 94,
    marit: "pass",
    result() {
        return this.marit
    }
};

const stu2 = {
    name: "manish",
    age: 21,
    marks: 67,
    marit: "fail",
    result() {
        return this.marit
    }
};

const stu3 = {
    name: "Rahul",
    age: 22,
    marks: 78,
    marit: "pass",
    result() {
        return this.marit
    }
};


const arr1 = [3, 4, 5, 6, 7, 8];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr1.sayHello = function () {
    console.log("Hello");
}
arr2.sayHello = function () {
    console.log("Hello");
}
console.dir(arr1);
console.dir(arr2);

arr1.sayHello();
arr2.sayHello();

