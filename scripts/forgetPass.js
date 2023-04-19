console.log("hello js")

let email


document.getElementById("email").addEventListener('keyup', function(){
    
    email = document.getElementById("email").value
    

    console.log( email)
})


function forgetPass () {
    console.log("calling login");
    let data = {        
        "email":document.getElementById("email").value       
    };
    console.log(data);

    fetch(`https://localhost:7102/api/controller/api/ForgetPassword?email=${data.email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    .then((response)=>response.json())
    .then((data) => {
        console.log('success', data);
        localStorage.setItem("token",data.response)
    })
    .catch((error) =>{
        console.log('Error:',error);
    })

    
    var x = localStorage.getItem("token")
    console.log(x)

}
