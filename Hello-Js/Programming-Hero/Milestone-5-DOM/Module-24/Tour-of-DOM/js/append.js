// Whrer to add
const placesList = document.getElementById('places-list')
// console.log(placesList)

// whats to be add
const li = document.createElement('li')
li.innerText = 'MirpuR-2'

// 3. add the child
placesList.append(li)


//1. Where to add
const mainContainer = document.getElementById('main-container')

// 2. What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My Food List'
section.append(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'Rice'
ul.append(li1)

const li2 = document.createElement('li')
li2.innerText = 'Polaw'
ul.append(li2)

const li3 = document.createElement('li')
li3.innerText = 'Hello Rice'
ul.append(li3)

const li4 = document.createElement('li')
li4.innerText = 'None Food'
ul.append(li4)



section.append(ul)

mainContainer.append(section)

// Set inner HTML driectly

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My Fev Dresses </h1>
<ul>
    <li> lungi </li>
    <li> lungi-2 </li>
    <li> lungi </li>
    <li> lungi 4</li>
</ul>
`

mainContainer.append(sectionDress)