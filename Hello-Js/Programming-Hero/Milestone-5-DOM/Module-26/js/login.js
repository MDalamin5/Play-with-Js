document.getElementById('btn-submit').addEventListener('click', function(){
    // to det the email address inside the email input field
    // use .vale to get the text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    console.log(email)

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    console.log(password)

    if((email === 'alamin@gmail.com') && (password === 'hello1234')){
        console.log('valid password')
        window.location.href = 'bank.html'
    }
    else
        alert('Invalid Password')
})