var fullName = 'Md Al Amin';
console.log(typeof fullName);
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof(number))
console.log(typeof number)
console.log(Array.isArray(number));

function addData(num2, num3){
    return num2 + num3;
}
console.log(typeof addData);
console.log(number.includes(5));
const newArray = [9, 10 , 11, 12];

const large_arr = number.concat(newArray);
console.log(large_arr);