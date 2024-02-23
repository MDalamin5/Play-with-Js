const lyrics = 'Tume bondu kala phake. ame bondu jeno ke. boshonto kale tomai bolta pare ni';
const parts = lyrics.split(' ');
console.log(parts);
console.log(parts.length)

const sentence = lyrics.split('.')
console.log(sentence)
const cahr = lyrics.split('');
console.log(cahr)

partial = lyrics.slice(5, 9)
console.log(partial)

const song = [
    'Tume bondu kala phake',
    ' ame bondu jeno ke',
    ' boshonto kale tomai bolta pare ni'
  ];

newSong = song.join('. ')
console.log(newSong)