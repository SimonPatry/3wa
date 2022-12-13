const showResult = (a, b) => {
    console.log(square(sum(a, b)))
}

const sum = (a, b) => {
    return a + b;
}

const square = (a, p = 2) => {
    return a**p
}

setTimeout(() => {
    console.log("before start");
}, 2000)

setTimeout(() => {
    console.log("start");
}, 1000)

console.log("end");
process.stdin("bonjour\n");
process.stdout("bonjour\n");
showResult(3, 7);