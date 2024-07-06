document.getElementById('btn-deposite').addEventListener('click', function(){
    const depoInputFeld = document.getElementById('deposit-field')
    const depoAmount = parseFloat(depoInputFeld.value)
    
    // Get previous depo Amount
    const preDepoAmountField = document.getElementById('deposit-total')
    const preDepoAmount = parseFloat(preDepoAmountField.innerText)
    let totalDeposite = preDepoAmount + depoAmount
    
    preDepoAmountField.innerText = totalDeposite
    depoInputFeld.value = ''
})