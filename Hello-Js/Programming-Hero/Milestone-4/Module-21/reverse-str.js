function reverseText(text){
    for(i= text.length - 1 ; i>=0 ; i--){
        console.log(text[i]);
    }
}

var str = 'This is a sentence';
reverseText(str);

function wordReverse(sentence){
    const word = sentence.split(' ')
    const result = []
    for(i = word.length - 1; i>=0 ; i--){
        // console.log(word[i]);
        result.push(word[i]);
    }
    const update_sentence = result.join(' ');
    console.log(update_sentence)
}

my_sentence = 'Hello sir, how are you!'
wordReverse(my_sentence);