const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.reverse());
//Assending Order sorting
const points = [40, 100, 1, 5, 25, 10];
console.log(points.reverse());
points.sort(function(a, b){
    return a - b
});
console.log(points)
//DESC order sorting....
points.sort(function(a,b){
    return b-a;
});
console.log(points);
for(var i =0; i<10; i++)
{
    console.log((Math.random() * 100).toFixed());
    console.log(Math.ceil(Math.random()*10))
}
console.log('The max value is: ', points[0]);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function(a, b){
    return a.year - b.year;
  });
console.log(cars);

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(cars);
