let h1 = document.querySelector('h1');

// setTimeout(() => {
//     h1.style.color = 'red';
// }, 1000);

// setTimeout(() => {
//     h1.style.color = 'green';
// }, 2000);
// setTimeout(() => {
//     h1.style.color = 'blue';
// }, 3000);



// function colorChange(color, delay) {
//     setTimeout(() => {
//         h1.style.color = `${color}`;
//     }, delay);
// }
// colorChange('red', 1000);
// colorChange('green', 2000);
// colorChange('blue', 3000);





function colorChange(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = `${color}`;
        // if(nextColorChange)
        nextColorChange();
    }, delay);
}


// callback nesting -> callback hell
colorChange('red', 1000, function () {
    colorChange('green', 1000, function () {
        colorChange('blue', 1000, function () {
            colorChange('purple', 1000, function () {
                colorChange('grey', 1000);
            });
        });
    })
})

