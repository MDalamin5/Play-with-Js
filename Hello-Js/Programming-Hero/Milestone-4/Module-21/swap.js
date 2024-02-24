num = 9
num2 = 10

var temp;
console.log('Before Swaping', num, num2)
temp = num;
num = num2;
num2 = temp

console.log('After Swaping', num, num2)

// Another way--- Destructuring
first = 11
second = 20

console.log('Before saping', first, second);
[first, second] = [second, first]
console.log('After saping', first, second);