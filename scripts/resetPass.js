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

var x = localStorage.getItem("token")
    console.log(x)


    function resetPass () {
        console.log("calling reset password");
        let data = {        
            "pass":document.getElementById("password").value,
            "confirmPass": document.getElementById("confirmPass").value
        };
        console.log(data);
    
        fetch("https://localhost:7102/api/controller/api/ResetPassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer' + localStorage.getItem("token")
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