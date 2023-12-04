function RandomNumInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(RandomNumInRange(1,6));

// sorting student as his name order....

let student = ['al amin', 'polok', 'aminul', 'mohimen', 'shobuj'];
student.sort();
// console.log(student);

function printData(value, index, array){
    console.log(value);
}
student.forEach(printData);

// for(i = 0; i< student.length; i++)
// {
//     console.log(student[i]);
// }

// sorting student as his Roll order....

let stu = [2, 45, 3,5 ,64, 2,24];

stu.sort(function(a, b){
    return a - b;
});
stu.forEach(printData);

// check a year leap year or not

let year = 2024;
function isLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
        console.log(year, 'is Leap year');
    }
    else
    console.log('Not');
}
isLeapYear(year);

// Check in a sentence how many vowel is there

const vowel = ["a", "e", "i", "o", "u"];
function cechkVowel(sentence){
    let count = 0;
    const letter = Array.from(sentence);
    letter.forEach(function(value){
        if(vowel.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(cechkVowel("Hello sir how are you!!"));
//find dupilcate number form the array

const arr = [1,2, 3, 5, 6, 7, 3, 2, 3, 7, 4, 4];
const dup_num = arr.filter(function(value, index, array){
    return array.indexOf(value) !== index;
})
console.log(dup_num);