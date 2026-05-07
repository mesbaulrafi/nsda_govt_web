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
        alert("Enter Youe Email")
    }
    else if (password.value === "") {
        alert('Enter Your Password')
    }
    else if (address.value === "") {
        alert('Enter Your Address')
    }
    else if (textaria.value === "") {
        alert('Write Text')
    }
    else {
        alert('Submite')
    }
})