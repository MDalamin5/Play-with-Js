function makeRed(){
    document.body.style.backgroundColor='red'
}

// Optios 2
const blueButton = document.getElementById('make-blue')
// console.log(blueButton)
blueButton.onclick = makeBlue

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// options 3

const makePurple = document.getElementById('make-purple')
// console.log(makePurple)

makePurple.onclick = function makePurplee(){
    document.body.style.backgroundColor = 'purple'
}

// Options 4

const makePink = document.getElementById('make-pink')
makePink.addEventListener('click', makePinkk)

function makePinkk(){
    document.body.style.backgroundColor = 'pink'
}


// Options 4 another way
const makeGreen = document.getElementById('make-green')

makeGreen.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

// finnaly use functions

document.getElementById('make-goldentrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})