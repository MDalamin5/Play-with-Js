console.log('test');
console.log(document);
console.log(document.body);
console.log(document.getElementsByTagName('h1'));
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

// get Elements by id

const bodyItems = document.getElementById('body-item')
// console.log(bodyItems.innerText)

const myFevFood = document.getElementsByClassName('fev-food')
// console.log(myFevFood)
for(let food of myFevFood){
    console.log(food.innerHTML)
}

let foodTitle = document.getElementById('food-title')
foodTitle.innerText = 'Food tile update from js'
testQuerySelectorData = document.querySelectorAll('.container li')
// console.log(testQuerySelectorData);
for(li of testQuerySelectorData){
    console.log(li.innerText)
}

// bring only one elements form the class or id

console.log('Data take from ')
foodContainerData = document.querySelector('.food-container li')
console.log(foodContainerData)

document.getElementById('field-tit').style.backgroundColor = 'red'
document.getElementById('field-tit').style.textAlign='center'

const title = document.getElementById('field-tit')
console.log(title.getAttribute('class'))
console.log(title.classList)
console.log(title.innerText)
console.log(title.innerHTML)
const food_title = document.getElementById('food-title');
food_title.setAttribute('food-title', 'tooltip set by js')

console.log(document.getElementsByClassName('food-container')[0].innerHTML)