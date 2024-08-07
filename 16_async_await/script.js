// async function greet() {            // define the asynchronous function
// }
// console.log(greet());               // return promise fullfiled





// async function greet(a) {            // define the asynchronous function
//     // joker();
//     return 'Hello!';                //resolved
// }
// console.log(greet());               // return promise



// async function greet() {
//     throw `Some Random Error Occure`;           // when throw random error
//     return `Hello `;
// }
// console.log(greet());                       //Promise {<rejected>: 'Some Random Error Occure'}



// async function greet() {
//     return `Hello `;
// }

// let promise = greet()
//     .then((res) => {
//         console.log(`promise was resolved ${res}`);                    // promise was resolved Hello
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// console.log(promise);                                       //Promise {<pending>}


// async function greet() {
//     joker();
//     return `Hello `;
// }

// let promise = greet()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(`Promise was rejected ${error}`);                 // Promise was rejected  reference error
//     })
// console.log(promise);                                                 //Promise {<pending>}



// async function greet() {
//     throw `poor connection`;
//     return `Hello `;
// }

// greet()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(`Promise was rejected ${error}`);           // promise was rejected poor connection
//     })



//// ********************** Arrorw function **********************


// async function say() {
//     return `hello world`;                //return a promise fullfiled
// }
// console.log(say());


// let say = async () => { };                  // return a promise fullfiled
// console.log(say());



// let say = async () => `hello world`;                  // return a promise fullfiled
// console.log(say());



// *********************** await() *********************

// function num() {
//     setTimeout(() => {
//         return 5;
//     }, 2000);
// };

// function add() {
//     return 5 + num();
// }
// console.log(add());             // NaN





// function getNum() {
//     return new Promise((resolve, reject) => {
//         let randNum = Math.floor(Math.random() * 10) + 1;
//         console.log(randNum);
//         return randNum;
//     })
// }
// async function NumIs() {
//     console.log(getNum());                              //Promise {<pending>}
// }
// let promise = NumIs();
// console.log(promise);                                   //Promise {<fulfilled>: undefined}




// function num() {
//     setTimeout(() => {
//         console.log("Hello");
//         return 5;
//     }, 2000);
// };
// console.log(num());                 // undefined

// async function add() {
//     await (5 + num());
// }
// let result = add();
// console.log(result);                    // promise {<pending>}

// setTimeout(() => {
//     console.log(result);                // Promise {<fulfilled>: undefined}
// }, 6000)



/// ************** return promise ****************

// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return 5;
//         }, 2000);
//     })
// };
// let number = num();                     // promise {<pending>}
// console.log(number);

// setTimeout(() => {
//     console.log(number);                // pomise{<pending>}
// }, 6000)





// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return 5;                       // not a return anything (promise return resolve or reject)
//         }, 2000);
//     })
// };
// let number = num();                     // promise {<pending>}
// console.log(number);
// number
//     .then(res => console.log(res))
//     .catch(err => console.log(err))




// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2000);
//     })
// };
// let number = num();
// number
//     .then(res => console.log(res))              //5
//     .catch(err => console.log(err))





// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2000);
//     })
// };
// let number = num();                     // promise {<pending>}

// setTimeout(() => {
//     console.log(number);                //Promise {<fulfilled>: 5}
// }, 6000)




// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random() * 10) + 1;
//             console.log(randNum);
//             resolve();
//         }, 1000);
//     })
// };
// async function add() {
//     await num();
//     await num();
//     await num();
// }
// add();





// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random() * 10) + 1;
//             console.log(randNum);
//             resolve("Hello Good Morning");
//         }, 1000);
//     })
// };
// async function add() {
//     await num();
//     await num();
//     await num();
// }
// add()
//     .then(res => console.log(res))                      //undefined
//     .catch(err => console.log(err))






// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random() * 10) + 1;
//             console.log(randNum);
//             reject("Hello Good Morning");                   //print one time
//         }, 1000);
//     })
// };
// async function add() {
//     await num();
//     await num();
//     await num();
// }
// add()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))                             //Hello Good Morning





function num() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randNum = Math.floor(Math.random() * 10) + 1;
            console.log(randNum);
            resolve("Hello Good Morning");                   //print one time
        }, 1000);
    })
};
async function add() {
    let first = await num();
    console.log("first", first);                         //first Hello Good Morning
    let second = await num();
    console.log("second", second);                       //second Hello Good Morning
    let last = await num();
    console.log("last", last)                            //last Hello Good Morning
}
add()
    .then(res => console.log("res", res))                //res undefined
    .catch(err => console.log("err", err))







function num() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randNum = Math.floor(Math.random() * 10) + 1;
            console.log(randNum);
            resolve("Hello Good Morning");                   //print one time
        }, 1000);
    })
};
async function add() {
    let first = await num();
    console.log("first", first);                         //first Hello Good Morning
    let second = await num();
    console.log("second", second);                       //second Hello Good Morning
    let last = await num();
    console.log("last", last)                            //last Hello Good Morning
    return last;
}
add()
    .then(res => console.log("res", res))                //res Hello Good Morning
    .catch(err => console.log("err", err))





// let h1 = document.querySelector('h1');
// function changeColor(color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve(color);
//         }, 2000)
//     })
// }
// async function startChangeColor() {
//     await changeColor('red');
//     await changeColor('green');
//     await changeColor('blue');
//     await changeColor('purple');
//     await changeColor('grey');
// }
// startChangeColor();

// changeColor('red')
//     .then(res => {
//         console.log(res);
//         return changeColor('green');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('blue');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('yellow');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('purple');
//     })
//     .then(res => {
//         console.log(res);
//         return changeColor('grey');
//     })
//     .catch(error => {
//         console.log(error);
//     })





// *************************** try{} & catch() *********************

// let h1 = document.querySelector('h1');
// function changeColor(color) {
//     return new Promise((resolve, reject) => {
//         let randNum = Math.floor(Math.random() * 10) + 1;
//         if (randNum > 3) {
//             setTimeout(() => {
//                 h1.style.color = color;
//                 console.log(color);
//                 resolve(color);
//             }, 2000)
//         } else {
//             reject(`error number : ${randNum}`);
//         }
//     })
// }
// async function startChangeColor() {
//     try {
//         await changeColor('red');
//         await changeColor('green');
//         await changeColor('blue');
//         await changeColor('purple');
//         await changeColor('grey');

//     } catch (error) {
//         console.log(error);
//     }

//     let num1 = 12;
//     console.log(num1);
//     console.log(`new number : ${num1 + 5}`);
// }
// startChangeColor();




// function num() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randNum = Math.floor(Math.random() * 10) + 1;
//             if (randNum < 3) {
//                 reject("number is less < 3");
//                 console.log(randNum);
//             } else {
//                 console.log(randNum);
//                 resolve();
//             }
//         }, 1000);
//     })
// };
// async function add() {
//     try {
//         await num();
//         await num();
//         await num();
//         await num();
//     } catch (error) {
//         console.log(error);
//     }
//     console.log(`Hey this is last execution`);
// }
// add();