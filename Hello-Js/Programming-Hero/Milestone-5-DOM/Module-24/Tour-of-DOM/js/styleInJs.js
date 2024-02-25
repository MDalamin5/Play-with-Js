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