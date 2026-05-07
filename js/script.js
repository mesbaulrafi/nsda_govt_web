let name = document.getElementById('nameInpute')
let email = document.getElementById('emailInpute')
let password = document.getElementById('passwordInpute')
let address = document.getElementById('addressInpute')
let textaria = document.getElementById('textaria')
let subBtn = document.getElementById('subBtn')


subBtn.addEventListener('click',()=>{
    if (name.value === "") {
        alert('Enter Your Name')
    }
    else if (email.value === "") {
        alert('Enter Your Email')
    }
    else if (password.value === "") {
        alert('Enter Your password')
    }
    else if (address.value === "") {
        alert('Enter Your address')
    }
    else if (textaria.value === "") {
        alert('Enter Your Text')
    }
    else {
        alert('succes')
    }
    
    
})