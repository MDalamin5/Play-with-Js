const letter = new Set([1, 3, 5, 3, 5, 3, 5]);
console.log(letter);
letter.add(8);
console.log(letter);

letter.forEach(function(value){
    console.log(value);
})

console.log(letter.values())


