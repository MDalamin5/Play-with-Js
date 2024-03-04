document.getElementById('btn-deposit').addEventListener('click', function(event){
    const depo_input = document.getElementById('user-deposit')
    const depo_amount = depo_input.value
    console.log(depo_amount)
    
    // get the previous amount

    const depo_total_element = document.getElementById('deposit-total')

    const previous_amount = parseInt(depo_total_element.innerText)
    const total_amount = previous_amount + parseInt(depo_amount)
    depo_total_element.innerText = total_amount
    // console.log(typeof(depo_amount))

    // update main balance
    const curBalanceAmount = document.getElementById('total-balance')
    const curBalanceAmountInt = parseInt(curBalanceAmount.innerText)
    curBalanceAmount.innerText = curBalanceAmountInt + parseInt(depo_amount)

    depo_input.value = ''
})

document.getElementById('btn-withdrow').addEventListener('click', function(){
    const withdrowField = document.getElementById('user-withdrow')
    const withdrowAmount = parseInt(withdrowField.value)
    if(isNaN(withdrowAmount)){
        alert('Please input an integer value')
        return
    }
    
    const previousWithdrowData = document.getElementById('withdrow-total')
    const previousWithdrowAmount = parseInt(previousWithdrowData.innerText)
    console.log(previousWithdrowAmount)
    const totalWithdrow = previousWithdrowAmount + withdrowAmount
    console.log(totalWithdrow)
    previousWithdrowData.innerText = totalWithdrow

    // update main balance

    const mainBalance = document.getElementById('total-balance')
    let mainBalInt = parseInt(mainBalance.innerText)
    console.log(typeof(withdrowAmount))
    if(withdrowAmount <= mainBalInt){
        mainBalInt = mainBalInt - withdrowAmount
        mainBalance.innerText = mainBalInt
    }
    else
        alert('Inscifient Balence please deposite first')




    withdrowField.value = ''
})