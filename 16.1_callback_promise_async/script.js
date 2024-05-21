//******************************  callback */
// A callback is a function passaed as an agument to another function.

// function sum(a, b) {
//     return a + b;
// }
// function calculate(a, b, callback) {
//     return callback(a, b);
// }
// console.log(calculate(10, 29, sum));



// function sum(a, b) {
//     console.log(a + b);
// }
// function calculate(a, b, callback) {
//     callback(a, b);
// }
// calculate(10, 29, sum);


// function calculate(a, b, callback) {
//     callback(a, b);
// }
// calculate(23, 10, (x, y) => {
//     console.log(x + y);
// })



// let hello = () => {
//     console.log("Hey Hello!");
// }
// setTimeout(hello, 2000);





// callback hell :- Nested callbacks stacked below one another forming a pyramid structure. (difficult to understand and manage)

// function getData(dataId, nextData) {
//     setTimeout(() => {
//         console.log("dataId ", dataId);
//         if (nextData) {
//             nextData();
//         }
//     }, 2000);
// }
// // getData(456);//2s
// // getData(200);//2s
// // getData(90);//2s

// getData(456, () => {
//     console.log(`getting data304...........`);
//     getData(304, () => {
//         console.log(`getting data200...........`);
//         getData(200, () => {
//             console.log(`getting data400...........`);
//             getData(400)
//         })
//     });
// })






//***************** Promises */

// Promises : - promise is for "eventual" completion of task. It is an object in JS.
//it is a solution to callback hell.

// let promise = new Promise((resolve,reject)=>{
//     //resolve();
//     //reject();
// })
// * resolve & reject are  callbacks



// let promise = new Promise((resolve, reject) => {
//     console.log(`I am pomise`);
// })
// console.log(promise);                   // Promise {<pending>}



// Promise-State : - pending , fulfilled , rejected


// let promise = new Promise((resolve, reject) => {

// })
// console.log(promise);                   // Promise {<pending>}


// let promise = new Promise((resolve, reject) => {
//     resolve();
// })
// console.log(promise);                   // Promise {<fulfilled>: undefined}


// let promise = new Promise((resolve, reject) => {
//     reject();
// })
// console.log(promise);                   // Promise {<rejected>: undefined}



// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", data);
//         }, 5000)
//     })
// }

// let result = getData(502);
// console.log(result);                        // Promise { <pending> }





// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", data);
//             resolve();
//         }, 5000)
//     })
// }

// let result = getData(502);
// console.log(result);                        // Promise { <pending> }   and after 5s promise is : Promise {<fulfilled>: undefined}



/// ************************ after resolve and rejected how to handle promise ***********************8
// .then((result)=>{}) & .catch((error)=>{})   use 



// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", data);
//             resolve();
//         }, 5000)
//     })
// }
// let result = getData(502);
// result
//     .then(() => {
//         console.log(`promise are fulfilled`);               // promise are fulfilled
//     })
//     .catch(() => {
//         console.log(`promise are rejected`);
//     })


// function getData(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", data);
//             reject();
//         }, 5000)
//     })
// }
// let result = getData(502);
// result
//     .then(() => {
//         console.log(`promise are fulfilled`);
//     })
//     .catch(() => {
//         console.log(`promise are rejected`);                    // promise are rejected
//     })



// **************************** promise chaining ******************8

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data1");
//         }, 3000)
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data2");
//         }, 3000)
//     })
// }

// console.log(`Fetching data1.........`);
// asyncFunc1()
//     .then((res) => {
//         console.log(res);
//         console.log(`Fetching data2.........`);
//         asyncFunc2()
//             .then((res) => {
//                 console.log(res);
//             })
//     })






// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId ", dataId);
//             resolve('success');
//         }, 2000);
//     })
// }

//getData(456)
//   .then((res) => {
//       console.log(res);
//       getData(201)
//        .then((res) => {
//            console.log(res);
//         })
//     })

// getData(456)
//     .then((res) => {
//         console.log(res);
//         return getData(201)
//     })
//     .then(res => {
//         console.log(res);
//         return getData(304);
//     })
//     .then(res => {
//         console.log(res);
//         return getData(405);
//     })
//     .catch(error => {
//         console.log(error);
//     })





//**************************************  */ Async-Await :- async function always returns a promise.
// async function myFunc(){..........};
// await pauses the execution of its surrounding async function until the promise is settled.


// async function hello() {
//     console.log(`hello`);
// }
// console.log(hello());           //Promise {<fulfilled>: undefined}





// function weatherApi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`weather data`);
//             resolve(200);
//         }, 2000)
//     })
// }

// async function getWeatherData() {
//     weatherApi();                                //after 2s :- weather data
// }
// let promise = getWeatherData();
// console.log(promise);                           //Promise {<fulfilled>: undefined}




// function weatherApi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`weather data`);
//             resolve("success");
//         }, 2000)
//     })
// }
// async function getWeatherData() {
//     await weatherApi();                          // using await keyword   // after 2s :- weather data
// }
// let promise = getWeatherData();
// console.log(promise);                           //Promise {<pending>}

// setTimeout(() => {
//     console.log(promise);                       // after 2s :- Promise {<fulfilled>: undefined}
// }, 3000);





// function weatherApi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`weather data`);
//             resolve("success");
//         }, 2000)
//     })
// }
// async function getWeatherData() {
//     await weatherApi();                         // after 2s :- weather data
//     await weatherApi();                         // after 2s :- weather data
// }
// let promise = getWeatherData();                 // always return :- promise object
// console.log(promise);                           //Promise {<pending>}




function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataId ", dataId);
            resolve('success');
        }, 2000);
    })
}

async function getAllData() {
    await getData(450);
    await getData(201);
    await getData(360);
    await getData(501);
    await getData(401);
}
let result = getAllData();
console.log(result);                            //Promise {<pending>} after 
