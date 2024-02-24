const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const partial = array.splice(2, 3);
const partial = array.splice(2, 3, 33, 444, 555); // add new elements in deleted part

console.log(partial)
console.log(array)