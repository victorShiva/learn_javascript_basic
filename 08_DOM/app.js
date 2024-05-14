// **************************** this pograme is executed in browser console not in nodeJS.


console.log(window);
console.log(document);
console.dir(document);
console.dir(document.all);
console.log(document.all);
console.log(document.all[8]);
console.dir(document.all[8]);

console.log(document.all[8].innerText);

// document.all[8].innerText = "Shaktiman";

// ------------------ getElementById ------------------------

let imgObj = document.getElementById('mainImg');
console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.tagName);
console.log(imgObj.src);
imgObj.src = 'assets/creation_1.png';



let para = document.getElementById('description');
console.log(para);
console.dir(para);
// para.innerText = 'shaktiman'



// ---------------------------getElementByClassName   ---------------------------

let collecionOfImg = document.getElementsByClassName('oldImg');
for (let i = 0; i < collecionOfImg.length; i++) {
    console.log(collecionOfImg[i].src);
    collecionOfImg[i].src = 'assets/spiderman_img.png';
    console.log(`Img is changed`);
}



// -------------------------getElementByTagName ------------------
let collTag = document.getElementsByTagName("p");
console.log(collTag);



//- -------------- querySelector -------------------
let firstP = document.querySelector('p');
console.log(firstP);                            // select first paragraph

let firstOldImg = document.querySelector('.oldImg');
console.log(firstOldImg);                               // select first img

let firstA = document.querySelector('div a');
console.log(firstA);

// ---------------- querySelectorAll ----------------
let allPaa = document.querySelectorAll('p');
console.log(allPaa);

let allOldImg = document.querySelectorAll('.oldImg');
console.log(allOldImg);


let allA = document.querySelectorAll('div a');
console.log(allA);



// ********** innerText -> shows the visible text contained in a node.
// ********* textContent ->  shows alll the full text.
// ******** innerHTML    -> shows the full markup.


let para1 = document.querySelector('p');
console.log(para1);
console.dir(para1);

console.log(para1.innerText);
console.log(para1.innerHTML);
console.log(para1.textContent);

para1.innerText = 'Hi I am Shiva'
para1.innerHTML = `Hi I am shiva
 <b> I am Here</b>`;

let heading = document.querySelector('h1');
console.log(heading);

heading.innerHTML = `<u>Spider Man1</u>`

heading.innerHTML = `<i>${heading.innerText}</i>`


//  *****************      getAttribute and setAttribute  **************

let firstImg = document.querySelector('#mainImg');
console.dir(firstImg);

console.log(firstImg.getAttribute('id'));

// console.log(firstImg.setAttribute('id', 'firstImage'));

firstImg.setAttribute('src', 'assets/spiderman_img.png')



//   ***********************   style   ***********************8
heading = document.querySelector('h1');
heading.style.backgroundColor = 'red';

let allAnch = document.querySelectorAll('.box a');
for (let i = 0; i < allAnch.length; i++) {
    allAnch[i].style.color = 'green';
}



// ************************** classList   *************************
firstImg = document.querySelector('img');
console.log(firstImg);

console.log(firstImg.classList);

let lastPara = document.querySelector('#description');
console.log(lastPara.classList);
lastPara.classList.add('paraColor');
console.log(lastPara.classList);

lastPara.classList.remove('paraColor');

console.log(lastPara.classList.contains('paraColor'));

lastPara.classList.toggle('paraColor');    //// add class
lastPara.classList.toggle('paraColor');    //// remove class

let box = document.querySelector('.box');
console.log(box.classList);
box.classList.toggle('cyan')


//  ****************************** Navigation ***************

let h4 = document.querySelector('h4');
console.log(h4);
console.log(h4.parentElement);
console.log(h4.children);

box = document.querySelector('.box');
console.log(box.children);

let ul = document.querySelector('ul');
console.log(ul);
console.log(ul.children);
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

firstImg = document.querySelector('#mainImg');
console.log(firstImg.previousElementSibling);
firstImg.previousElementSibling.style.backgroundColor = '#ddd'
firstImg.previousElementSibling.style.color = 'green'


// ************************* adding Elements **************
// document.createElement('p')

let p = document.createElement('p')
console.log(p);
p.innerText = 'this is a paragraph';

let body = document.querySelector('body');
body.appendChild(p);                        //add element in body tag last-one

box = document.querySelector('.box');
console.log(box);
box.appendChild(p);


let button = document.createElement('button');
console.log(button);
button.innerText = 'Subscribe';

box.append(button);
button.append('Now');
p.append(`<b>I am shiva</b>`);


let follow = document.createElement('button');
follow.innerText = 'Follow me!'
box.prepend(follow);
follow.append(' Now')



let btn = document.createElement('button');
btn.innerText = 'request'
let describe = document.querySelector('#description');
console.log(describe);

describe.insertAdjacentElement('beforebegin', btn);
describe.insertAdjacentElement('afterbegin', btn);
describe.insertAdjacentElement('beforeend', btn);
describe.insertAdjacentElement('afterend', btn);


// removeChild(element) **********************
console.log(btn);
console.log(btn.remove());

console.log(box);
console.log(box.removeChild(follow));
console.log(button);
// console.log(box.remove(button));   // remove box element 

