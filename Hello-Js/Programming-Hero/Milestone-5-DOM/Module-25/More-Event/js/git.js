document.getElementById('id-delete').addEventListener('click', function(){
    const sectret = document.getElementById('secret-info')
    sectret.style.display = 'none';
})

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value
    const delete_button = document.getElementById('id-delete')
    if(text === 'delete'){
        delete_button.removeAttribute('disabled')
    }
    else
        delete_button.setAttribute('disabled', true)
})