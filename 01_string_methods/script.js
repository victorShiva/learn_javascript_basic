// let password = prompt('Enter passord :');
// let confirmpass = password.trim();
// alert(`your password is : ${confirmpass}`);

let msg='   Goodmorning India    ';
console.log(msg.trim());

let str='Goodmorning India ';
let UpStr=str.toUpperCase();
let LwStr=str.toLowerCase();

console.log(UpStr);
console.log(LwStr);
console.log(str);


let message='ILoveCoding';
let index=message.indexOf('Love');
console.log(index);
console.log(message.indexOf('l'));//-1
console.log(message.indexOf('x'));//-1
console.log(message.indexOf('d'));//7



msg='         Hey My Name Is Shiva      ';
console.log(msg);
let newMsg=msg.toUpperCase().trim();
console.log(newMsg);

msg='ILoveTea';
console.log(msg.slice(1));

let slice_of_msg = msg.slice(1,5);//Love
console.log(slice_of_msg);
console.log(msg.slice(5));//after skip 5 index no
console.log(msg.slice(-4));
console.log(msg.slice(-6,-2));


// replace
msg = 'ILoveCoding';
console.log(msg.replace('love','do'));
let newStr= msg.replace('Love','do');
console.log(newStr);

msg = 'I love Tea';
console.log(msg.replace('e','z'));

//repeat()

let fruit = 'Mango';
let bunch=fruit.repeat(3);
console.log(fruit);
console.log(bunch);

// practice

msg = 'help!';
console.log(msg.trim().toUpperCase());

let name='ApnaCollege';
console.log(name.slice(4,9));//aColl
console.log(name.indexOf('na'));//3
console.log(name.replace("Apna",'Our'));

console.log(name.slice(4).replace('l','t'));
console.log(name.slice(4).replace('l','t').replace('l','t'));

//Array

let info=['shradha',23,89.5];
console.log(info[0]);
console.log(info[0][0]);
console.log(info[1][0]);

// push 

let cars=['BMW','FERRARI','Audi','JAGUAR'];
cars.push('FARTUNER');
console.log(cars);

//delete from end
let delete1=cars.pop();
console.log(delete1);
console.log(cars)


//unshift
cars=['BMW','FERRARI','Audi','JAGUAR'];
let collection=cars.unshift('XUV500');
let collection2=cars.unshift('TOYOTA');
console.log(cars);
console.log(collection);//5

//shift
cars=['BMW','FERRARI','Audi','JAGUAR'];
let deletecar=cars.shift();
console.log(cars);
console.log(deletecar);

// practice

let months = ['january','july','march','august'];
months.shift();
months.shift();
months.unshift('june');
months.unshift('july');
console.log(months);


months = ['january','july','march','august'];
console.log(months.includes('march'));

console.log(months.indexOf('august'));

//concat
let arr1=['a','b','c','d'];
let arr2=['h','i','j','k'];

let arr3=arr1.concat(arr2);
console.log(arr3);

let arr4=arr2.reverse();
console.log(arr4);
console.log(arr2);

//slice 
let colors=['january','july','march','august','red','yellow','black','blue'];
console.log(colors.slice());
console.log(colors.slice(2,6));
console.log(colors.slice(3));
console.log(colors.slice(-3));
console.log(colors.slice(-12))

console.log('my name is khan')

//splice
 colors=['january','july','march','august','red','yellow','black','blue'];
 console.log(colors.splice(5));
 console.log(colors);

 colors=['january','july','march','august','red','yellow','black','blue'];
 console.log('remainder ' , colors.splice(0,3,'pink','white'));
 console.log(colors);

 //sort

 months=['january','july','march','august','september','february'];
 let result=months.sort();
 console.log(months);
 console.log(result);

 months=[16,25,89,9,32,11,3,0,6];
 console.log(months.sort());

//  practice

months = ['january','july','march','august'];
months.splice(0,2,'july','june');
console.log(months)

let language=['c','c++','html','javascript','python','java','c#','sql'];
let js_indx=language.reverse().indexOf('javascript');
console.log(js_indx);

// array references

let arr=[1,2,3,5,7,8];
let arrCopy=arr;
console.log(arrCopy);
arrCopy.push(100);
console.log(arrCopy);
console.log(arr);

arrCopy.shift();
console.log(arrCopy);
console.log(arr);

let res=[1]===[1];
console.log(res);
res=[]===[];
console.log(res);

res = 'hero'==='hero';
console.log(res);

// const Array
const arr_con=[1,2,3,4];
arr_con.push(10);
arr_con[1]=100;
console.log(arr_con);

let arr_con2=arr_con;
arr_con2.push(500);
console.log(arr_con2);

// arr_con = [21,33,4354,5454];
// console.log(arr_con);// error constant variable

// tic-tac-toe
let game=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(game);


// practice

let num1=[7,9,0,-2]
num1.splice(-1);
console.log(num1);

let num2=[7,9,0,-2];
num2.splice(0,1);
console.log(num2);

let str1 =' ';
let str2=str1.trim()
if(str2.length != 0){
    console.log(`string is not blank`);
} else{
    console.log(`string is blank`);
}

let char='D';
if(char === char.toLowerCase()){
    console.log(`char is lowercase`);
}else{
    console.log(`char is not lowercase`);
}


let trail=['a','b','c','e','h','k'];
   char='e';
   console.log(trail.indexOf(char));
if(trail.indexOf(char) == -1){
    console.log(`${char} is not exists`);
}else{
    console.log(`${char} is exists`);
}


num1=[7,9,0,-2]
let n=3;
let ans=num1.slice(0,n);
console.log(ans)
console.log(num1)



num1=[7,9,0,-2]
n=3;
ans=num1.slice(num1.length-n);
console.log(ans)
console.log(num1)


