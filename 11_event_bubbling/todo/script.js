let input = document.querySelector('input');
let addBtn = document.querySelector('button');
let ul = document.querySelector('ul');

addBtn.addEventListener("click", function () {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');

    li.innerText = input.value;
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');

    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = '';
})

// let allDeleteBtn = document.querySelectorAll('.delete-btn')
// allDeleteBtn.forEach((ele) => {
//     ele.addEventListener("click", function () {
//         let li = ele.parentElement;
//         li.remove();
//     })
// })


// ********************** event delegation *****************

ul.addEventListener("click", function (e) {
    console.dir(e.target.nodeName);
    if (e.target.nodeName == "BUTTON") {
        let liItem = e.target.parentElement;
        liItem.remove();
    }
})
