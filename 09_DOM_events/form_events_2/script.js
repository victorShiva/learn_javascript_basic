/*****************************
 * change event -> the change event occurs when the value of an element has been changed (only works on <input> ,<textaea> and <select> elements). 
 **************************** */

let userInput = document.querySelector('#user');
let userPass = document.querySelector('#pass');
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
})



//++++++++++++++ change value +++++++++++++++

// userInput.addEventListener("change", function (e) {
//     console.log("input changed");
//     console.log('final value = ', this.value);               //  userInput.value
// })

// userPass.addEventListener("change", function () {
//     console.log("password changed");
//     console.log("final changed", userPass.value);          //  userPass
// })




/* ***************************
Input envent -> the input event fires when the value of an <input> , <select> , or <textarea> element has been changed.  ********************************* */


//++++++++++++++++++++++ input event   +++++++++++

userInput.addEventListener("input", function (e) {
    console.log("input changed");
    console.log('every value = ', this.value);               //  userInput.value
})

userPass.addEventListener("input", function () {
    console.log("password changed");
    console.log("every changed", userPass.value);          //  userPass
})