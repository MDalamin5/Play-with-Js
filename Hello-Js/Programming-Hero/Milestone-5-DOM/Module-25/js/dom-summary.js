function HandelOnclick(){
    document.body.style.backgroundColor = 'red'
    const handelStatus = document.getElementById('handler-status')
    // console.log(handelStatus)
    handelStatus.innerText = 'Hello! Its change By JS'
}

document.getElementById('event-lisener').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink'
    const handelStatus = document.getElementById('handler-status')
    // console.log(handelStatus)
    handelStatus.innerText = 'Hello! Its change Event handeler'
})

// options2 

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-text')
    const inputText = inputField.value;
    
    const nameID = document.getElementById('random-text');
    nameID.innerText = inputText

    inputField.value = ''
    
})