console.log('Hello Shiva');
let a = 19;
let b = 32;
console.log("sum is = ", a + b);

console.log(`'123'==123 =`, '123' == 123);
console.log('123' === 123);

console.log(`0=='' =`, 0 == '');
console.log(`0==' ' =`, 0 == '');
console.log(`0===' ' =`, 0 === '');
console.log(null == undefined);
console.log(null === undefined);
console.log(String.fromCharCode(100));

let color = 'yellow';
if (color == 'red') {
    console.log('Stop');
} else if (color == 'yellow') {
    console.log('Slow-Down')
} else if (color == 'green') {
    console.log('go');
}

console.log("This is message");
console.error("This is error message");
console.warn("This is warning message");

let word = 'apple';
if (word[0] == 'a' || word[0] == 'A') {
    if (word.length > 3) {
        console.log('good words')
    } else {
        console.log('word is not good');
    }
} else {
    console.log('word is not good');
}

let str = '';
if ((str[0] == 'a' || str[0] == 'A') && (str.length > 3)) {
    console.log('good words');
} else {
    console.log('bad words');
}

let day = 1;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
}