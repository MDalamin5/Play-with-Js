// 5 + 10 + 15 + ......+200 = ?
var sum = 0;

for(var i = 0; i<=200; i += 5)
    sum += i;
console.log(sum)

// for each loop

number = [1, 3, 5, 6, 78, 8, 9, 8];

for(var i = 0; i<number.length; i++){
    
    if(i== 4)
        continue;
    console.log(number[i])
}