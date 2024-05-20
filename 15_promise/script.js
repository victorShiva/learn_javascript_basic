// function saveToDb(data) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         console.log(`you data was saved : ${internetSpeed}`);
//     } else {
//         console.log(`poor connection, data not saved : ${internetSpeed}`);
//     }
// }
// saveToDb();


// function saveToDb(pass, fail) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         pass();
//     } else {
//         fail();
//     }
// }
// saveToDb(success, failure);

// function success() {
//     console.log(`connection is success`);
//     saveToDb(() => console.log(`success:2 => second is successfull`),
//         () => console.log(`failure:2 => second is fail`))
// }
// function failure() {
//     console.log(`poor connection`);
// }



// ******************** promise () ********************

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve(`success : data was saved`);
        } else {
            reject(`failure : weak connection`);
        }
    })
}
// let result = saveToDb();        //promise object
// result.then(() => {
//     console.log(`promise was resolved`);
//     console.log(result);
//     })
//     .catch(() => {
//         console.log(`promise was rejected`);
//         console.log(result);
//     })



// saveToDb("Hey There")
//     .then(() => {
//         console.log(`promise was resolved-1`);
//         saveToDb()
//             .then(() => {
//                 console.log(`inner-resolved-1`);
//             })
//             // .catch(() => {
//             //     console.log(`inner-rejected-1`);
//             // });
//     })
//     .catch(() => {
//         console.log(`promise was rejected`);
//     })



// saveToDb("Hey There")
//     .then(() => {
//         console.log(`promise was resolved-1`);
//         return saveToDb();
//     })
//     .then(() => {
//         console.log(`inner-resolved-2`);
//         return saveToDb();
//     })
//     .then(() => {
//         console.log(`inner-resolved-3`);
//     })
//     .catch(() => {
//         console.log(`promise was rejected`);
//     })




/// ******************* Tea Maker ****************

function Maker(data) {
    return new Promise((resolve, reject) => {
        if (data == "tea") {
            resolve('water');
        } else {
            reject("Please Enter : 'tea'");
        }
    })
}
// Maker('tea')
//     .then((val) => {
//         console.log(`take a cup ${val} and heating that`);
//         return 'Mikl';
//     })
//     .then((val) => {
//         console.log(`bowllling to both water and ${val}`);
//         return 'zinger';
//     })
//     .then((val) => {
//         console.log(`after bowlling that put into ${val}`);
//         return 'shakkar';
//     })
//     .then((val) => {
//         console.log(`after put ${val} bowling 10 min "Tea is Ready"`);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// function teaMaker(data) {
//     if (data == 'tea') {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(`water`);
//             }, 1000);
//         })
//     } else {
//         console.log(`give me argument 'tea'`);
//     }

// }

// teaMaker('tea')
//     .then((res) => {
//         console.log(`take 1 cup ${res}`);
//         setTimeout(() => {
//             return (`Milk`);
//         }, 1000);
//     })
//     .then((res) => {
//         setTimeout(() => {
//             console.log(`take 1 cup ${res}`);
//             return (`heat the both mixture`);
//         }, 1000);
//     })
//     .then((res) => {
//         console.log(`heat the both mixture`);
//         setTimeout(() => {
//             return (`put into zinger and shakkar`);
//         }, 1000);
//     })
//     .then((res) => {
//         setTimeout(() => {
//             console.log('Tea is Ready');
//         }, 1000);
//     })



function milkTea(data = 'tea') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

milkTea('tea')
    .then(res => {
        console.log(`Recipe to the ${res}`);
        return milkTea('water');
    })
    .then(res => {
        console.log(`Take 1 cup ${res}`);
        return milkTea('milk');
    })
    .then(res => {
        console.log(`Take 1 cup ${res}`);
        return milkTea('zinger');
    })
    .then(res => {
        console.log(`after 5 min put into ${res}`);
        return milkTea('shakkar');
    })
    .then(res => {
        console.log(`and then put in ${res}`);
        return milkTea();
    })
    .then(() => {
        console.log(`after 5 min Tea is Ready`);
    })
    .catch((error) => {
        console.log(error);
    })


let h1 = document.querySelector('h1');

function colorChange(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(color);
        }, 2000);
    })
}

let promisObj = colorChange('red')
    .then(res => {
        h1.style.color = res;
        return colorChange('green');
    })
    .then(res => {
        h1.style.color = res;
        return colorChange('blue');
    })
    .then(res => {
        h1.style.color = res;
        return colorChange('purple');
    })
    .then(res => {
        h1.style.color = res;
        return colorChange('yellow');
    })
    .then(res => {
        h1.style.color = res;
    })
    .catch(err => {
        h1.style.color = 'cyan';
    })

console.log(promisObj);