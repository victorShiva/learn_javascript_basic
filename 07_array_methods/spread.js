
let arr1 = [12, 34, 56, 78, 9, 3, 1, 2, 3, 57, 88, 9, 96];

console.log(...arr1);                            //  12 34 56 78 9 3 1 2 3 57 88 9 96
console.log([...arr1]);                           // [ 12, 34, 56, 78,  9, 3, 1,  2,  3, 57, 88, 9, 96 ]
console.log({ ...arr1 });                         // {'0': 12,'1': 34,'2': 56,'3': 78,'4': 9,'5': 3,'6': 1,'7': 2,'8': 3,'9': 57,'10': 88,'11': 9,'12': 96}


let userName = 'Shiva_Gupta';
console.log(...userName);                        // S h i v a _ G u p t a
console.log([...userName]);                       // [ 'S', 'h', 'i', 'v','a', '_', 'G', 'u', 'p', 't', 'a' ]
console.log({ ...userName });                     // {'0': 'S','1': 'h','2': 'i','3': 'v','4': 'a','5': '_','6': 'G','7': 'u','8': 'p','9': 't','10': 'a'}



let myobj = {
    name: 'shiva',
    last: 'gupta',
    age: 25,
    isLogIn: true
};
// console.log(...myobj);   // Error 

// +++++++++++++++++ concat Array using spread  operators ++++++++++++
let heros = ['salaman', 'shaharukh', 'ranveer'];
let luckyNum = [5, 7, 8, 2];

let combo = [...heros, ...luckyNum];
console.log(`combo => `, combo);               // combo => [ 'salaman', 'shaharukh', 'ranveer', 5, 7, 8, 2 ]


// ************************** find min using ... spread operators *********

console.log(Math.min(12, 45, 776, 54, 22, 11, 44, 66));               //11

let num = [12, 34, 56, 3, 78, 99, 43, 53, 123, 434];                    //3
console.log(Math.min(...num));



//----------------------------------------------------
let num1 = [10, 20, 30, 40, 50];
console.log(...num1);                       // 10 20 30 40 50
console.log(10, 20, 30, 40, 50);            // 10 20 30 40 50
console.log(..."SHIVAGUPTA");               // S H I V A G U P T A




//**************************** concate of array using concat() methods **********************

let arr2 = [100, 2000, 400, 600, 800];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//++++++++++++ using ...spread operators ++++
arr1 = [12, 34, 56, 78, 9, 3, 1, 2, 3, 57, 88, 9, 96];
arr2 = [100, 2000, 400, 600, 800];
arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(typeof arr3[0]);


// ******************* join() *****************
arr1 = [12, 34, 56, 78, 9, "shiva", "gupta", "ritika"];
let createString = arr1.join();
console.log(createString);                         // 12,34,56,78,9,shiva,gupta,ritika
console.log(typeof createString);                   //string

//console.log(createString.join('-'));              // createString is a string

console.log(arr1.join(''));             // 123456789shivaguptaritika
console.log(arr1.join('+'));            // 12+34+56+78+9+shiva+gupta+ritika




//************************* spread() method vs join() ****************** */
let num_str = [12, 34, 56, 78, 9, "shiva", "gupta", "ritika"];

console.log(...num_str);                   // 12 34 56 78 9 shiva gupta ritika

console.log(num_str.join());                // '12,34,56,78,9,shiva,gupta,ritika'
console.log(num_str.join(''));              // '123456789shivaguptaritika'



// ****************** spread (object literals) ******************
let data = {
    name: 'shiva',
    last: 'gupta',
    age: 25,
    isLogIn: true
};

let userInfo = { ...data, id: 204, fav: 'JavaScript' };

console.log(data);                         // { name: 'shiva', last: 'gupta', age: 25, isLogIn: true }
console.log(userInfo);                      // {name: 'shiva',last: 'gupta',age: 25 , isLogIn: true , id: 204 , fav: 'JavaScript'}