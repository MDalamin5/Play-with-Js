console.log(Math.PI);
console.log(Math.round(4.4));
console.log(Math.trunc(234.234));
// let userInput = prompt("Enter Your input: ");
// console.log(userInput);
console.log(Math.sqrt(64));
console.log(Math.floor(Math.random()*11)) // 0 to 10

// Random number Generator Functions

function getMyRandomNum(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getMyRandomNum(401, 404));
