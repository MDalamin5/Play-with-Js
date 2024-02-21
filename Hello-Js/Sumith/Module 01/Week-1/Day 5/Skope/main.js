 console.log('Intro Of Skope');

 let x = 2;
 console.log(x*4);

 {
    let x = 4
    console.log(4*x);
 }

 // recape Scope
 {
   // block space this value is not use out side the block
   var xy = 5;
   console.log(xy - x);
   var carName = 'volvo'
 }
 console.log(window.carName);
 let carName1 = 'alion'
 


 