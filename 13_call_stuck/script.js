function one() {
    return 1;
}

function two() {
    return one() + one();
};

function three() {
    let ans = two() + one();
    console.log(ans);
}
three();

setTimeout(() => {
    console.log("Callback-1")
}, 2000);

setTimeout(() => {
    console.log("Callback-2")
}, 500);

console.log("End Execution");