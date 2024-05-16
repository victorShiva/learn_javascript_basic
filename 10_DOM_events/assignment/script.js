let collectionOfLi = document.querySelectorAll('ul li');
collectionOfLi.forEach((li) => {
    li.addEventListener("mouseout", function () {
        this.style.color = 'red';

        setTimeout(() => {
            this.style.color = "purple";
        }, 500);

        setTimeout(() => {
            this.style.color = "";
        }, 1000);

    })
});

let btn = document.querySelector('#btn1');
window.addEventListener('scroll', function () {
    btn.style.backgroundColor = 'red';
    this.setTimeout(() => {
        btn.style.backgroundColor = ''
    }, 1000)
    collectionOfLi.forEach(ele => {
        ele.style.color = 'purple'
    })
})



// ++++ create a button on the page using javascript. Add an event listener to the button that changes the button's color to green when it is clicked

let colorBtn = document.createElement('button');
colorBtn.innerText = 'Color-Button';

let ul = document.querySelector('ul');
ul.insertAdjacentElement('afterend', colorBtn);

colorBtn.addEventListener('click', function () {
    colorBtn.style.backgroundColor = 'green'
})
