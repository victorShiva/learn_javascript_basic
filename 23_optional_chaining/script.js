/*
const user = {
    firstName: "Shiva",
    lastName: "Gupta",
    age: 24,
}

// console.log(user.firstName);    //Shiva
// console.log(user.address);         //undefined

// console.log(user.address.city);             //TypeError

// if (user.address) {
//     console.log(user.address.city);
// }

console.log(user.address && user.address.city);             //undefined
*/




const user = {
    firstName: "Shiva",
    lastName: "Gupta",
    age: 24,
    address: {
        city: "mumbai"
    }
}


// console.log(user.address && user.address.city);             //mumbai
// console.log(user.address && user.address.pinCode);          // undefined

console.log(user.address?.city);                    //mumbai
console.log(user?.address?.city);                   //mumbai

console.log(user?.address?.city?.street?.houseNo);              //undefined

// console.log(user.firstName.firstWord.firstChar);                //Error
console.log(user?.firstName?.firstWord?.firstChar);                 // undefined







// *************************** && operator to stop the further properties  when first false **********************
console.log(user && user.firstName);                //Shiva
console.log(user && user.firstName && user.firstName.firstWord);            //undefined
console.log(user && user.firstName && user.firstName.firstWord && user.firstName.firstWord.firstChar);          //undefined
//                                                  |
//                                                false here






