// Searching text and Replace any word
//. /pattern/modifers;
let text = "visit w3School";
let n = text.search(/W3School/i);  // 6
console.log(n);
// 8: 34 min --> #46 video
let data = "North South University North South University";
let updateDate = data.replace(/south/gi, 'West');
console.log(updateDate);

let numData = '123456789';
let numRes = numData.match(/[1-5]/g);
console.log(numRes);
