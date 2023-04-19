console.log("hello js")

// let firstName 
// let lastName
// let email
// let password
// let confirmPassword


// document.getElementById("firstName").addEventListener('keyup', function(){
//     firstName = document.getElementById("firstName").value
    
//     console.log(firstName, lastName, email, password, confirmPassword)
// })

// document.getElementById("lastName").addEventListener('keyup', function(){
    
//     lastName = document.getElementById("lastName").value
    

//     console.log(firstName, lastName, email, password, confirmPassword)
// })

// document.getElementById("email").addEventListener('keyup', function(){
    
//     email = document.getElementById("email").value
    

//     console.log(firstName, lastName, email, password, confirmPassword)
// })

// document.getElementById("password").addEventListener('keyup', function(){
    
//     password = document.getElementById("password").value
        

//     console.log(firstName, lastName, email, password, confirmPassword)
// })

// document.getElementById("confirmPass").addEventListener('keyup', function(){
    
//     confirmPassword = document.getElementById("confirmPass").value
//     console.log(firstName, lastName, email, password, confirmPassword)
  
// })

// console.log(firstName, lastName, email, password, confirmPassword)

function register () {
    let data = {        
        "firstName":document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "emailId":document.getElementById("email").value,
        "password": document.getElementById("password").value,
        // "confirmPass": $('#confirmPass').val()
    };
    console.log(data);

    fetch("https://localhost:7102/api/controller/api/Register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    .then((response)=>response.json())
    .then((data) => {
        console.log('success', data);
    })
    .catch((error) =>{
        console.log('Error:',error);
    })
}

register()