/*
input form 1 to 50
if a number is divisible by 3 then isnted of the number show foo
if a number is divisible by 5 then isnted of the number show suu
if a number is divisible by 3 and 5 then isnted of the number show ronaldo
*/
const football = [];
for(i = 1, j=0; i<=50; i++, j++){
    if(i % 3 === 0 && i % 5 === 0){
        football[j] = 'ronaldo';
    }
    else if(i % 3 === 0)
        football[j] = 'foo';
    else if(i % 5 === 0)
        football[j] = 'suu';
    else
        football[j] = i;
}

console.log(football);
console.log(Array.isArray(football))