function get() {
    console.log(this);
}
// get();                                       // global object
// new get();                                  // get {}
// get.call();                                 // global object


// function getInfo(name) {
//     console.log(this.name);
// }

// getInfo('shiva')                        // undefined       





// function getInfo(obj) {
//     console.log(this.name);
// }

// const person1 = {name:'shiva'};

// getInfo(person1);                       // undefined




function getInfo(obj) {
    console.log(this.name);
}

const person1 = { name: 'shiva' };
const person2 = { name: 'Raghav' };
const person3 = { name: 'Dhirendra' };

// getInfo.call(person1);                       //shiva
// getInfo.call(person2);                       //Raghav
// getInfo.call(person3);                       //Dhirendra



// const personInfo = {
//     fav : 'Java',
//     job : 'youtube',
//     fun1 : function (){
//         console.log(this);
//     },
//     fun2:()=>{
//         console.log(this);
//     }
// }

// personInfo.fun1();
// personInfo.fun2();




const personInfo = {
    fav: 'Java',
    job: 'youtube',
    fun1: function () {
        console.log(this);
        const fun2 = () => {
            console.log(this);
        }
        fun2();
    },

}

personInfo.fun1();



const student = {
    name: "sanjeev",
    age: 25,
    prop: this,                     //global scope
    getFun1: function () {          // object scope
        console.log(this);
        console.log(this.name);
    },
    getFun2: () => {
        console.log(this);          // global scope
        console.log(this.age);
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);          // object scope
            console.log(this.name);
        }, 1000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);              // global scope
            console.log(this.age);
        }, 1000);
    }
}

console.log(object);