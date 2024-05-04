
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('print odd number');

for (let i = 1; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log('odd number print');

for (let i = 1; i < 20; i = i + 2) {
    console.log(i);
}

console.log('Even');
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

// multiply
// let char=prompt('Enter number to table:');
char = '21';
let n = parseInt(char);
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log('outer-loop ' + i);
    if (i > 5) continue;
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
}
console.log('while loop');
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

char = '12';
n = parseInt(char);
j = 1;
while (j <= 10) {
    console.log(12 * j);
    j++;
}

let favNumber = 'secret';
// let guess=prompt('Guess favorite movie:');
// guess=parseInt(guess);
let guess = 'secret';
while ((guess != favNumber) && (guess != 'quit')) {
    guess = prompt('wrong ans Please try again:');
}
if (guess == favNumber) {
    console.log('Congrats!!');
}

//break

let i = 1;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 10; j <= 15; j++) {
        if (i >= 6) {
            break;
            // return;
        }
        console.log(j);
    }
}

//loop with array

console.log('Loop with Array!');
let colors = ['january', 'july', 'march', 'august', 'red', 'yellow', 'black', 'blue'];
colors.push('pineapple');
for (let i = 0; i < colors.length; i++) {
    console.log(i + " : " + colors[i]);
}

console.log('Reverse print of arrray');
colors = ['january', 'july', 'march', 'august', 'red', 'yellow', 'black', 'blue'];
//reverse index
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i + " : " + colors[i]);
}


// nested Array with nested loop 
console.log(`nested Array with nested loop`);
let arr1 = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], [10, 20, 30, 40, 50]];



for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let i = 0; i < arr1.length; i++) {
    console.log(`list : ${i}`);
    for (let j = 0; j < arr1[i].length; j++) {
        console.log(arr1[i][j]);
    }
}

// for of looop
console.log('For Of Loooooooooooopp ');
colors = ['january', 'july', 'march', 'august', 'red', 'yellow', 'black', 'blue'];
for (value of colors) {
    console.log(value);
}

console.log('For Of Loooooooooooopp for strings');
char = 'asdfghjtrefghgfd';
for (value of char) {
    console.log(value);
}

//nested array with nested for of loop
console.log(`nested array with nested for of loop`);
let nesArr = [['aranv', 'mahim', 'guru', 'kailas', 'golu'], [123, 443, 1212, 543, 3232, 2323]];

for (arr1 of nesArr) {
    for (value of arr1) {
        console.log(value);
    }
}