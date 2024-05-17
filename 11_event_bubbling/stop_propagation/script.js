let div = document.querySelector('div');
let ul = document.querySelector('ul');
let allli = document.querySelectorAll('li');

div.addEventListener("click", function () {
    console.log("div was clicked");
})

ul.addEventListener("click", function (e) {
    console.dir(e);
    // console.log(e.stopPropagation());
    // console.log("ul was clicked");
})

for (let li of allli) {
    li.addEventListener("click", function (e) {
        console.log("li was clicked");
    })
}