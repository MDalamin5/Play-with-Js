// try{
//     let x = 10; 
//     let y = 0;
//     console.log(x/y);
// }
// catch(err){
//     console.log(err);
// }
// console.log('After the catch block');

let y = 2;

try{
    if(y == ''){
        throw 'Its empty';
    }
    if( y == NaN(y)) throw 'Not a Number';

    if(y <= 5) throw 'Too low number';
    if(y>10) throw {
        message : 'Too high',
        name : 'HighError'
    };
}
catch(err)
{
    console.log(err);
}
console.log('After catch block');