// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// // // let result = add(10);
// // // console.log(result);
// // let result = add(12)(10)
// // console.log(result);
// let result = add(10)(12)(13);
// console.log(result);


// const add = (a) => (b) => (c) => a + b + c;
// let result = add(8)(2)(5);
// console.log(result);






function sendEmail(to) {
    return function (subject) {
        return function (body) {
            return `Send Email to ${to} with subject ${subject} : ${body}`;
        }
    }
}
// let result = sendEmail("shiva")("javascript")("I have Learnt complete javascript");
// console.log(result);



// let Email = sendEmail("shivagupta@gmail.com");
// console.log(Email);
// let subject = Email("React learning");
// console.log(subject);
// let body = subject("I have completed my Reactjs");
// console.log(body); 





function add(num2, num3) {
    return num1 + num2 + num3;
}
function calculate() {
    const num1 = 10;
    return add;
}
// const addition = calculate();
// console.log(addition);
// const result = addition(2, 5);       // Error add is not define
// console.log(result);


