document.getElementById('btn-deposit').addEventListener('click', function(event){
    const depo_input = document.getElementById('user-deposit')
    const depo_amount = depo_input.value
    console.log(depo_amount)
    
    // get the previous amount

    const depo_total_element = document.getElementById('deposit-total')
    depo_total_element.innerText = depo_amount
})