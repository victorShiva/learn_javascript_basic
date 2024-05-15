let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    h1.style.color = randomColor;


    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    console.log('color is updated');
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
