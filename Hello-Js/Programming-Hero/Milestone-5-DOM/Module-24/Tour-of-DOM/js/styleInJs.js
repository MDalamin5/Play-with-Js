const sections = document.querySelectorAll('section');
// console.log(sections)
for(let section of sections){
    // console.log(section)
    section.style.border = '2px solid yellow'
    section.style.marginBottom = '5px'
    section.style.borderRadius = '10px'
    section.style.padding = '20px'
    section.style.backgroundColor = 'green'
}

const placesContainer = document.getElementById('places-container')

placesContainer.style.backgroundColor = 'red'

// console.log(placesContainer)
// console.log(placesContainer.childNodes)
// console.log(placesContainer.childNodes[3].childNodes)
// console.log(placesContainer.childNodes[3].childNodes[3].nextSibling)
// console.log(placesContainer.childNodes[3].childNodes[3].previousSibling)

// // // create new elements using js

// const li = document.createElement('li')
// console.log(li)
// li.innerText = 'Brand new places to go'
// console.log(li.innerText)

// placesContainer.appendChild(li)
// console.log(placesContainer.parentNode.parentNode.parentNode.parentNode)

