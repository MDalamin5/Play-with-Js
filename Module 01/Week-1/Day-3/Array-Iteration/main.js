const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array){
    console.log(index,'-->',value)
}

//array method
numbers.forEach(myFunction);

console.log('Now Wr are in map-function');
function myFunction2(value, index){
    console.log(index,'-->',value);
    return value * 2;
}

const newNumbers = numbers.map(myFunction2)
console.log('Disply newNumber using old Funciton');
newNumbers.forEach(myFunction);

console.log('Using Filter Funciton');

function myFilterFun(value, index, array){
    return value >= 10;
}
newFilterNum = numbers.filter(myFilterFun);
newFilterNum.forEach(myFunction);

function mySumFunction(total, value, index, array){
    // console.log(total);
    return total + value;
}
sum = newNumbers.reduce(mySumFunction);
sum1 = numbers.reduce(mySumFunction,1);
console.log('New-num Sum: ',sum);
console.log('Numbers sum: ',sum1);

function everyFunction(value, index, array)
{
    return value >= 4
}

let restult = numbers.every(everyFunction);
console.log(restult);

function someFunction(value, index, array)
{
    return value >= 40
}

let restult2 = numbers.some(someFunction);
console.log(restult2);

let position = numbers.indexOf(25);
console.log(position);
console.log(numbers.includes(4));

console.log(Array.from('ABCD'))
