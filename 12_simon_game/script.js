let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    // console.log(btn);
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    // let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your score was  <b>${level}</b></br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 300)
        reset();
    }
}
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}