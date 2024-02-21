console.log('test');
const car = ['volvo', 'toyoto', 'bmw', 'audi', 'honda'];
let text = "";
for(let i = 0; i< car.length; i++)
{
    text += car[i] +"<br>";
}
// console.log(text)
document.getElementById("demo").innerHTML = text;

// For in Loop
person = {
    name: 'Md Al Amin',
    age : 23,
    uni : "NSU",
};
for(let x in person){
    console.log(x,":",person[x]);
}

 const number = [12, 34, 643, 34, 2, 234]; // not recomended for array
for(let num in number){
    console.log(number[num]);
}

// For of Loop
let fname = "Alamin";
for(let x of fname){
    console.log(x)
}
for(let i of number){
    console.log(i)
}