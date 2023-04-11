console.log("hello js")

let firstName 
let lastName
let email
let password
let confirmPassword


document.getElementById("firstName").addEventListener('keyup', function(){
    firstName = document.getElementById("firstName").value
    
    

    console.log(firstName, lastName, email, password, confirmPassword)
})

document.getElementById("lastName").addEventListener('keyup', function(){
    
    lastName = document.getElementById("lastName").value
    

    console.log(firstName, lastName, email, password, confirmPassword)
})

document.getElementById("email").addEventListener('keyup', function(){
    
    email = document.getElementById("email").value
    

    console.log(firstName, lastName, email, password, confirmPassword)
})

document.getElementById("password").addEventListener('keyup', function(){
    
    password = document.getElementById("password").value
        

    console.log(firstName, lastName, email, password, confirmPassword)
})

document.getElementById("confirmPass").addEventListener('keypress', function(){
    
    confirmPassword = document.getElementById("confirmPass").value
    console.log(firstName, lastName, email, password, confirmPassword)
  
})

console.log(firstName, lastName, email, password, confirmPassword)