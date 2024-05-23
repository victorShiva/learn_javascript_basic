// JSON :- javascript object notation
// JSON datatypes :- object , array , string , number , "true" , "false" , "null"

// Accessing Data from JSON  :- JSON.parse(data)   &  JSON.stringify(json)

let json = '{"name":"shiva","age":26}';
console.log(json);
let obj1 = JSON.parse(json);
console.log(obj1);                          //{ name: 'shiva', age: 26 }

let str = JSON.stringify(obj1);
console.log(str);                            //{"name":"shiva","age":26}