document.getElementById('btn-more').addEventListener('mousemove', function(){
    console.log("Event Tiggerd")
})

// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('Eveent tigerd by input fiesd')
// })

// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('Eveent tigerd by input field blur')
// })

// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value)
// })

// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value)
// })
document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value)
})