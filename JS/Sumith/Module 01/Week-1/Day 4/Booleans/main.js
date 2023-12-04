let result = true;
console.log('alamin' > 'hello');
let x = 5;
let y = '5';
console.log(x == y)
console.log(x === y)
console.log(x !== '5');

let age = 18;
if(age > 15){
    console.log('You are elagiable to vote');
}
else
    console.log('You are not');


console.log(age > 19 ? 'you are elageable to vote' : 'You are not elagiable to vote');

console.log(2 > 'Al Amin');

let newAge = 'AL amin';

newAge = Number(newAge);

if(isNaN(newAge)){
    console.log('Please enter a number!!');
}
else
    console.log(newAge > 18 ? 'Old enough' : 'You are child');