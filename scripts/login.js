console.log("hello js")

let email
let password


document.getElementById("email").addEventListener('keyup', function(){
    
    email = document.getElementById("email").value
    

    console.log(email, password)
})

document.getElementById("password").addEventListener('keyup', function(){
    
    password = document.getElementById("password").value
        

    console.log(email, password)
})

console.log(email, password)
