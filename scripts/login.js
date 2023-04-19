console.log("hello js")

let emailId
let password


document.getElementById("email").addEventListener('keyup', function(){
    
    emailId = document.getElementById("email").value
    

    console.log(emailId, password)
})

document.getElementById("password").addEventListener('keyup', function(){
    
    password = document.getElementById("password").value
        

    console.log(emailId, password)
})

console.log(emailId, password)



function login () {
    console.log("calling login");
    let data = {        
        "emailId":document.getElementById("email").value,
        "password": document.getElementById("password").value
    };
    console.log(data);

    fetch("https://localhost:7102/api/controller/api/Login", {
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

// fetch('https://localhost:7102/api/controller/api/Login', {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//       body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//       // alert('data added successfully')
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
}