let btn = document.querySelector('button')


// btn.addEventListener("click", function (e) {
//     console.log("button clicked");
//     console.log(e);
// });
// btn.addEventListener("dblclick", function (e) {
//     console.log("button double clicked");
//     console.log(e);
// });



// *********************** keyboad Events *****************
let input = document.querySelector('input');

// input.addEventListener("keydown", function (e) {
//     console.log("key was pressed");
// })


// input.addEventListener("keyup", function (e) {
//     console.log("key was released");
// })


// input.addEventListener("keydown", function (e) {
//     console.log("key was pressed");
//     console.log(e);
// })


// input.addEventListener("keydown", function (e) {
//     console.log("key was pressed");
//     console.log(`KEY = ${e.key}`);
//     console.log(`CODE = ${e.code}`);
// })


input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
        console.log("userUp");
    } else if (e.key === "ArrowDown") {
        console.log("userDown");
    } else if (e.key === "ArrowLeft") {
        console.log("userLeft");
    } else if (e.key === "ArrowRight") {
        console.log("userRight");
    } else if (e.code === 'Numpad1') {
        console.log(`user press =  Numpad1`);
    } else if (e.code === 'Numpad2') {
        console.log(`user press =  Numpad2`);
    } else if (e.code === 'Digit1') {
        console.log(`user press =  Digit1`);
    } else if (e.code === 'Digit2') {
        console.log(`user press =  Digit2`);
    }

})