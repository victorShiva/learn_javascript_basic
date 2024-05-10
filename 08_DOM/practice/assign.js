let para1 = document.createElement('p');
para1.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rerum quisquam quos autem veniam doloremque rem soluta atque, molestias fugit a adipisci eveniet. Nihil, laudantium?
`;
let body = document.querySelector('body');
body.prepend(para1);
para1.style.color = 'blue'

let h3 = document.createElement('h3');
h3.innerText = 'Hello godd morning';
document.querySelector('body').prepend(h3);
h3.classList.add('red')



let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('para');

div.classList.add('box');
document.querySelector('body').prepend(div);

h1.innerText = 'I am Div';
para.innerText = 'Mee Too!';

div.append(h1);
div.append(para);


// ********* Create a new input and button element on the page using JavaScript only.Set the text of button to “Clickme”;
let input = document.createElement('input')
let btn = document.createElement('button');

btn.innerText = 'Click Me';
para1.insertAdjacentElement('afterend', input);
input.insertAdjacentElement('afterend', btn);


//******************Add following attributes to the element:-
//Change placeholder value of input to “username”
//-Change the id of button to “btn” */

input.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');



//*********************Access the btn using the query Selector and button id.Change the button background color to blue and text color to white. */

let btnId = document.querySelector('#btn');
console.log(btnId);

btnId.style.backgroundColor = 'blue';
btnId.style.color = 'white';



//**********************Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple. */

let DOM = document.createElement('h1');
DOM.innerText = ' “DOM Practice”';
document.querySelector('body').prepend(DOM);
console.log(DOM.classList);
DOM.classList.add('dom')


// ************************ Create a p tag on the page and set its text to “Hello EveryOne Good-Morning with javascript”, where Good-Morning is bold.

let para2 = document.createElement('p');
para2.innerHTML = `Hello EveryOne <b>Good-Morning</b> with javascript`;
btnId.insertAdjacentElement('afterend', para2);

