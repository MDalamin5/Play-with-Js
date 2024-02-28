document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Clik in li item-2');
    // event.stopPropagation()
    event.stopImmediatePropagation()
})

document.getElementById('ul-id').addEventListener('click', function(){
    console.log('Clik in ul boss');
})

document.getElementById('section-id').addEventListener('click', function(){
    console.log('Click From section')
})

document.getElementById('body-id').addEventListener('click', function(){
    console.log('Click From body')
})