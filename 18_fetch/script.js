// let url = 'https://catfact.ninja/fact';
// console.log(fetch(url));                    //Promise {<pending>}




// let url = 'https://catfact.ninja/fact';
// fetch(url)
//     .then(res => {
//         console.log(res);
//         // console.log(res.json());                //Promise {<fulfilled>:object}
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.fact);
//         return fetch(url);
//     })
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         console.log(data.fact);
//     })
//     .catch(err => {
//         console.log(err);
//     })






//**************************** using async and await */
// let url = 'https://catfact.ninja/fact';

// async function getFacts() {
//     let res = fetch(url);
//     console.log(res);                               //Promise {<pending>}
// }
// console.log(getFacts());                            //Promise {<fulfilled>: undefined}




// let url = 'https://catfact.ninja/fact';

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         console.log(data.fact);
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
//         console.log(data2.fact);
//     } catch (err) {
//         console.log(err);
//     }
//     console.log(`end execution`);
// }
// console.log(getFacts());








