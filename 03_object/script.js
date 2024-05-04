//Js Object Literals

// +++++++++++++++++++++++++++ using let keyword+++++++++++++++++++++++++++++


let student = {
    name: "shiva",   //key => name , value  =>   "shiva"  
    age: 25,
    marks: 88,
    class: 'BCA'
};

let boys = {
    name: "joker",   //key => name , value  =>   "shiva"  
    age: 28,
    marks: 65,
    class: 'BA'
};

student = boys;
console.log(student);



//+++++++++++++++++++++ using const keyword +++++++++++++++++++++++++

const owner = {
    name: "aghav",   //key => name , value  =>   "shiva"  
    age: 28,
    marks: 91,
    class: 'BCA'
};

girl = {
    name: "Ritika",   //key => name , value  =>   "shiva"  
    age: 32,
    marks: 70,
    class: 'BA'
};

// owner = girl;    //  Owner is constant variable
// console.log(owner); ///Error this is declared constant variable


// ++++++++++++++++++++++++++++ multiple datatypes stored++++++++++++++++++++++++++

const teacher = {
    name: "parth",
    age: 36,
    lecture: true,
    sub: ["python", "linux", "mysql", "java"]
};


// create an object literals for the properties of thread / twitter post which includes
const post = {
    userName: "@shiva",
    content: "this is my #firstPost",
    likes: 57,
    reposts: 5,
    tags: ["@Gulfam", "@Himanshu", "@Anshu", "@Golu", "@Sochu"]
}

console.log(post);

//// get the value +++++++++++++++++++++

console.log(post["userName"]);
console.log(post.userName);


console.log(post["likes"]);
console.log(post.likes);


console.log(post["tags"][4]);
console.log(post.tags[2]);


// fetch value with variable==++++++++++++++++++++++++++

student = {
    name: "shiva",
    age: 25,
    marks: 88,
    class: 'BCA'
};

let lecture = "class";
console.log(student[lecture]);  // BCA

let exam = "age";
console.log(student[exam]);  //25



//+++           JS automatically convert objects keys to strings            +++++++++++++++++++++++
// +++++++++++ ever if we made the number as a key , the number will be converted to string 

let obj = {
    1: 'a',
    2: 'b',
    null: 'd',
    undefined: 'c',
    true: 'e'
}

console.log(obj[1]); //1
console.log(obj['1']);  //1


console.log(obj[null]);
console.log(obj['null']);


console.log(obj[true]);
console.log(obj["true"]);


/// addd/update value
//++++++++  change the city to mumbai
// ++++++++++ add new property gender to male
// +++++++++++  change the marks to "A"


student = {
    name: "shiva",
    age: 25,
    marks: 88,
    city: 'delhi'
};

student.city = "Mumbai";
student.gender = "male";
student.marks = "A";

console.log(student);


///+++++++++++++++++++ object of Objects+++++++++++++

const classInfo = {
    sanjeev: {
        grade: "A+",
        city: "Mumbai",
        gender: "male"
    },
    ritika: {
        grade: "B+",
        city: "deharadun",
        gender: "female"
    },
    shiva: {
        grade: "A+",
        city: "Mumbai",
        gender: "male"
    },
    salman: {
        grade: "A",
        city: "pune",
        gender: "male"
    }
}
console.log(classInfo["ritika"]);      //{ grade : "B+" , ci...}
console.log(classInfo["ritika"]["grade"]);   //  B+   



// ++++++++++++++++ Array of Objects +++++++++++++++++++

const studentInfo = [
    {
        name: "sanjeev",
        grade: "A+",
        city: "Mumbai",
        gender: "male"
    },
    {
        name: "ritika",
        grade: "B+",
        city: "deharadun",
        gender: "female"
    },
    {
        name: "shiva",
        grade: "A+",
        city: "Mumbai",
        gender: "male"
    },
    {
        name: "salman",
        grade: "A",
        city: "pune",
        gender: "male"
    }
]

console.log(studentInfo);
console.log(studentInfo[0]);
console.log(studentInfo[0].name);



console.log(Math.abs(125));
console.log(Math.abs(-21));


console.log(Math.pow(2, 3));

console.log(Math.floor(13.544)); //13
console.log(Math.floor(-14.544)); //-15



console.log(Math.ceil(13.544)); // 14
console.log(Math.ceil(-11.84));  //-11

console.log(Math.random()); //    0 to 0.999


///// ++++++++++++++++ Random number ++++++++++++
console.log("Get The Random Numbe ------");

let num = Math.random();
console.log(num);

num = num * 10;
console.log(num);

num = Math.floor(num);
console.log(num);

// 1 to 10

num = num + 1;
console.log(num);

//  Generate the random number between 1 to 10
let num1 = Math.floor(Math.random() * 10) + 1;
console.log(num1);

// Generate the random number between 0 to 10
console.log(Math.floor(Math.random() * 11));


// Generate the random number between 1 to 100

let num2 = Math.floor(Math.random() * 100) + 1;
console.log(num2);



// Generate the random number between 1 to 5
let num3 = Math.floor(Math.random() * 5) + 1;
console.log(num3);


// Generate the random number between 21 to 25
let num4 = Math.floor(Math.random() * 5) + 21;
console.log(num4);
