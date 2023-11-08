const a = {
    name : 'Bangladesh',
    devision : 8,
    sleep : function(){
        console.log('People are Sleeping');
    },
}
console.log(a.name.length);
let sliceStr = a.name.slice(3,6);
console.log(sliceStr);
console.log(a.name.slice(2));
console.log(a.name.substring(3,3));
let hello = "I'm student from North South University.";
var newHello = hello.replace('student', 'Teacher');
console.log(newHello);
console.log(newHello.toUpperCase());
let text1 = 'Hello';
let text2 = 'NSU';
var joinText = text1.concat(" ",text2);
console.log(joinText);
// Js String are immutble alawys return new String
// Trim to use unnesserry Space in string
let text3 = "             Hello VS code        "
console.log(text3);
console.log(text3.trim());
console.log(text1.charAt(0));
console.log(text1[0]); // text can be unpredictable
var data = 'This a new text line, to Understand the splite part'
console.log(data.split(" ")); //splite always return Array
console.log(data.split(","));
console.log(data.split("")); 
