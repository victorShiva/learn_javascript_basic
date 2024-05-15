let form = document.querySelector('form');

// form.addEventListener("submit", function (e) {
//     e.preventDefault();                                     //  default action that belongs to the event will not occur.
//     alert("form submited");
//     console.log("form submited!");
// });




// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let input = document.querySelector('input');
//     console.log(input);
//     console.dir(input);
//     console.log(input.innerText);
//     console.log(input.value);
// })



// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let userText = document.querySelector('#user');
//     let userPass = document.querySelector('#pass');
//     console.log(userText.value);
//     console.log(userPass.value);
//     alert(`Hi ${userText.value} , your password is set to ${userPass.value}`);
// })



// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log(form);
//     console.dir(form);
//     console.log(form.elements);
//     console.dir(form.elements);
//     console.log(form.elements[0]);
//     console.log(form.elements[1]);
//     console.log(form.elements[2]);
//     console.log(form.Username);
// })



form.addEventListener("submit", function (e) {
    e.preventDefault();
    let userText = this.elements[0];                // form.elements[0]
    let userPass = form.elements[1];                // this.elements[1]
    console.log(userText.value);
    console.log(userPass.value);
    alert(`Hi ${userText.value} , your password is set to ${userPass.value}`);
});

