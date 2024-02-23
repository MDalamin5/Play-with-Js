const lyrics = 'Tume bondu kala phake ame bondu jeno ke. boshonto kale tomai bolta pare ni'
let doesExist = lyrics.includes('kala')
console.log(doesExist)

let doesExists = lyrics.includes('Kala')
console.log(doesExists)

let doesExist2 = lyrics.toUpperCase().includes('AME')
console.log(doesExist2);

console.log(lyrics.indexOf('bondu'));

if(lyrics.indexOf('jeno') !== -1)
    console.log('This is exists')
else
    console.log('Does not exists');

// Start with
console.log(lyrics.startsWith('Tume'));

my_file = 'hello.pdf';
console.log(my_file.endsWith('.pdf'))