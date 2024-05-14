let btn = document.querySelector('button');
console.log(btn);

// btn.onclick = function () {
//     console.log("btn clicked");
//     alert("hello");
// }



// function greet() {
//     console.log("Happy Journey!");
// }
// function sayHello() {
//     alert("Hello good-morning");
// }
// btn.onclick = sayHello;
// btn.onclick = greet;




let btns = document.querySelectorAll('button');
// for (const val of btns) {
//     val.onclick = greeting;
//     val.onclick = warn;
//     val.onmouseenter = function () {
//         console.log("Arrow at button!");
//     }
// }
// function greeting() {
//     alert("Hey !");
//     console.log("good Evening!");
// }
// function warn() {
//     console.log('only one event execute');
// }



//***************************addEventListener('event',callback) */

// btn.addEventListener("click", function () {
//     console.log("first event is execute");
// })
// btn.addEventListener("click", function () {
//     console.log("second event is execute");
// })



btns.forEach((ele) => {
    const newLocal = '';
    ele.addEventListener('mouseenter', double);
    ele.addEventListener('click', () => {
        console.log('first-event');
    })
    ele.addEventListener('click', () => {
        alert('second-event');
    })
})
function double() {
    console.log("hey this is double clicked");
}
