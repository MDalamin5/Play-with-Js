let letter = "55.01";

console.log(Number(letter));
console.log(Number(" "));
console.log(parseFloat(letter));
console.log(parseInt(letter));

let a = "5";
let b = + a;
console.log(b);
console.log(typeof(b));

d = new Date();
console.log(Number(d));
console.log(Date().toString());

console.log(Number(true));
console.log(false.toString());

//Autometic type consversions
console.log("5" * "4");
console.log(5 + null);
console.log("5" + null);
console.log("5" + 2); //52 think in string
console.log("5" - 2);

//Autometic Stirng Conversions
let obj = {
    name : "Md Al Amin"
}
console.log(obj.toString());