let a = 'Hello sir';
let b = 'How are you';
let c = 23 + a;
console.log(typeof(c));
let d = null;
console.log(typeof(d));
let e;
console.log(typeof(e));
const arr = [1,3,5,6];
console.log(typeof(arr));
function myFun(value){
    console.log(value*2);
}
console.log(typeof(myFun));
console.log(typeof(typeof(5)));

console.log("John".constructor);   // Returns function String()  {[native code]}
console.log((3.14).constructor);
console.log((3).constructor);               // Returns function Number()  {[native code]}
console.log(false.constructor);                 // Returns function Boolean() {[native code]}
console.log([1,2,3,4].constructor);            // Returns function Array()   {[native code]}