const max = prompt("Enter the max number:");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess == 'quit') {
        console.log("userquit");
        break;
    }
    if (guess == random) {
        console.log("you are right congrats! andomm numbe is", random);
        break;
    } else if (guess < random) {
        guess = prompt("your guess was too small , Please try Again !");
    } else {
        guess = prompt("your guess was too large , Please try Again !");
    }


    // else {
    //     guess = prompt("your guess is wrong , Please try Again !")
    // }
}
