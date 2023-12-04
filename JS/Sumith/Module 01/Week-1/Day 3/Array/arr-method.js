const fol = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fol-mul").innerHTML = fol.toString();
document.getElementById("fol-mul").innerHTML = fol.join("***")
fol.pop();
document.getElementById("fol-mul1").innerHTML = fol.toString();
fol.push('Mango');
let a = fol.pop();
console.log(a);
console.log(fol);
let b = fol.shift();
console.log(fol);
console.log(b);
fol.unshift('cocononut');
console.log(fol);
delete fol[0];
console.log(fol);
fol.unshift('helha');
console.log(fol);
fol[1] = 'new fol';
console.log(fol);
fol.splice(2, 0, 'boroApple', 'MajariApple');
console.log(fol);
fol.splice(2,2, 'kiwi', 'nan');
console.log(fol);
fol.splice(0,1);
console.log(fol);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myBoys.concat(myGirls);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myFamily = arr1.concat(arr2, arr3);
console.log(myFamily);

const newFamily = myFamily.concat('Zack', 'Suki');
console.log(newFamily);

const dividet_arr = myFamily.slice(1, 3);
console.log(dividet_arr);



