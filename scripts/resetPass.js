console.log("hello js")


let password
let confirmPassword


document.getElementById("password").addEventListener('keyup', function(){
    
    password = document.getElementById("password").value
        

    console.log(password, confirmPassword)
})

document.getElementById("confirmPass").addEventListener('keypress', function(){
    
    confirmPassword = document.getElementById("confirmPass").value
    console.log(password, confirmPassword)
  
})

console.log( password, confirmPassword)