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