// console.log('test');
// console.log(document);
// console.log(document.body);
// console.log(document.getElementsByTagName('h1'));
const liElements = document.getElementsByTagName('li');
for(const list of liElements){
    // console.log(list) 
    console.log(list.innerText)
}

const h1Elements = document.getElementsByTagName('h1');
for(const h1 of h1Elements){
    // console.log(list) 
    console.log(h1.innerText)
}