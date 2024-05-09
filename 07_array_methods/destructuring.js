let names = ["saurabh", 'lucky', 'krish', 'john', 'don'];
// let winner = names[0];
// let runnerUp = names[1];
// console.log(winner);                                 // suarabh
// console.log(runnerUp);                               // lucky

// let [winner, runnerUp] = names;
// console.log(winner);                                 // suarabh
// console.log(runnerUp);                               // lucky


// let [winner, , , runnerUp] = names;
// console.log(winner);                                //saurabh
// console.log(runnerUp);                              // john


let [heros, freind, winner, num] = ["shaharukh", 'vijay', 'shiva', 5775];
console.log(heros);
console.log(freind);
console.log(winner);
console.log(num);


let [winner1, runnerUp, ...others] = names;
console.log(winner1);                        // saurabh
console.log(runnerUp);                       // lucky
console.log(others);                        // [ 'krish', 'john', 'don' ]


/// *********************** Destructuring (object) *************************
let data = {
    name: "Shiva",
    age: 25,
    class: 'BCA',
    subject: ['JavaScript', 'Mysql', 'React', 'NodeJS'],
    userName: 'shiva@5775',
    password: '1234'
}

// let { userName, age, password } = data;                     //variable search same keyname than assign
// console.log(userName, age, password);                       // shiva@5775 25 1234



// let { userName: user, password: secret } = data;
// console.log(user, secret);                                      // shiva@5775 1234


// let { userName: user, password: secret, city = "Mumbai" } = data;
// console.log(user, secret, city);                                    //shiva@5775 1234 Mumbai





/// -----------------------------------------------------------

let Info = {
    name: "Shiva",
    age: 25,
    class: 'BCA',
    subject: ['JavaScript', 'Mysql', 'React', 'NodeJS'],
    userName: 'shiva@5775',
    password: '1234',
    city: 'delhi'
}

// let { userName: user, password: secret, city = "Mumbai" } = Info;
// console.log(user, city);                                            //shiva@5775 delhi


let { userName: user, password: secret, city: city = "Mumbai" } = Info;
console.log(user, city);                                                //shiva@5775 delhi