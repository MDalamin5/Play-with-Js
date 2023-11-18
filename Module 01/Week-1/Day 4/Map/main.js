// map store Kye value Pare

const person = new Map([
    ["name", "md Al Amin"],
    ["age", 23],
    ["uni", "NSU"]
])
console.log(person)
console.log(person.get('name'));
console.log(person.has('uni'))

person.forEach(function(value, key){
    console.log(key,":", value)
})
