// const number = [1, 3, 4, 5, 6, 7];

const varity_data = ['Al amin', 22, 33.44, 'c']

for(var i = 0; i<4; i++){
    console.log(varity_data[i], ' ');
}

console.log(varity_data.length)

// array index
varity_data[4] = 44444;
console.log(varity_data)

var positionofIndex = varity_data.indexOf(33.44);
console.log(positionofIndex)