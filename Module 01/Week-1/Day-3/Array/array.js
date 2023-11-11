const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
console.log(typeof(cars))
console.log(Date.now())
console.log(cars.sort());
console.log(cars.length);
console.log(cars[cars.length - 1]);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
fruits.push('Lemon');
let text = "<ul>";
// for(let i =0; i<length; i++)
// {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

function myFunction(value){
    text += "<li>" + value + "</li>";
}
text += "</ul>";
fruits.forEach(myFunction)
document.getElementById("demo").innerHTML = text;
console.log(Array.isArray(fruits));
person = {
    name : 'MD AL AMin',
    age : 23,
    uni : "NSU"
}
console.log(Array.isArray(person));

console.log(fruits instanceof Array);



