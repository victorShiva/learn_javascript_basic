// let url = 'https://catfact.ninja/fact';

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log(e);
//     }
// }
// getFacts();



// let div = document.querySelector('div');
// let p = document.querySelector('div p');
// let btn = document.createElement('button');
// btn.innerText = 'Click Here!';
// div.insertAdjacentElement('afterend', btn);


// let url = 'https://catfact.ninja/fact';

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         p.innerText = res.data.fact
//     } catch (e) {
//         console.log(e);
//     }
// }

// btn.addEventListener('click', getFacts)








let div = document.querySelector('div');
let p = document.querySelector('div p');
let btn = document.createElement('button');
btn.innerText = 'Click Here!';
div.insertAdjacentElement('afterend', btn);


btn.addEventListener('click', async function () {
    let fact = await getFacts();
    p.innerText = fact;
});
async function getFacts() {
    try {
        let res = await axios.get('https://catfact.ninja/fact');
        return res.data.fact;
    } catch (e) {
        return "No Facts Found"
    }
}
// getFacts()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))