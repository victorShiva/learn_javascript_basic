let btn = document.createElement("button");                 // create button element
btn.innerText = "Click Me!";                                // element text

let h1 = document.querySelector('h1');                      //fetch the h1 element
h1.insertAdjacentElement("afterend", btn);                  // add button tag after h1 tag



//******************** this in event listeners *********************** */
btn.addEventListener("click", function () {
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
    console.log(this.style.backgroundColor = 'yellow');
})


let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

h2.addEventListener("click", changeColor)
h3.addEventListener("click", changeColor)
p.addEventListener("click", changeColor)

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = 'yellow'
}