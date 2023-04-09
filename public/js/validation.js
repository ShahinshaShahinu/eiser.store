

function validateform() {
   const name = document.Submission.name.value;
   const username = document.Submission.username.value;
   const email = document.Submission.email.value;
   const password = document.Submission.password.value;
   const confirmPassword = document.Submission.confirmPassword.value;


    // var otp = document.Submission.otp.value;


    const nameRegex =/^[A-Za-z ]+$/;
    const usernameRegex = /^\w+$/;
    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;

let  checking =document.getElementsByClassName('text-danger')

if(name == ''&&username == ''&&password == ''&&confirmPassword ==''&&email == ''){
    let i=0
    while(i<checking.length){    
        checking[i].innerHTML='this field is empty' 
          i++
         
    }
    return false
}

    // Validate name

    if (name == '') {
        checking[0].innerHTML = 'Please enter your full name.';
        return false;
    }
    if(name.length<5){
        checking[0].innerHTML = 'Please enter atleast 5 charecter';
        return false;
    }
    if (!nameRegex.test(name)) {
        checking[0].innerHTML = 'Name can only contain letters';
        return false;
    }

    // Validate username
  
    if (username == '') {
        checking[1].innerHTML = 'Please enter a username.';
        return false;
    } 
     if(username.length<5){
        checking[1].innerHTML = 'Please enter atleast 5 charecter';
        return false;
    }
    if (!usernameRegex.test(username)) {
        checking[1].innerHTML = 'Username can only contain letters, numbers, and underscores.';
        return false;
    }

    // Validate password

    if (password == '') {
        checking[2].innerHTML = 'Please enter a password.';
        return false;
    }
    if (!passwordRegex.test(password)) {
        checking[2].innerHTML = 'Password must be at least six characters, including at least one letter and one number.';
        return false;
    }

    // Validate confirm password
    if (confirmPassword == '') {
        checking[3].innerHTML = 'Please confirm your password.';
        return false;
    }
    if (confirmPassword != password) {
        checking[3].innerHTML = 'Passwords do not match.';
        return false;
    }

    // Validate email
    if (email == '') {
        checking[4].innerHTML = 'Please enter an email address.';
        return false;
    }
    if (!emailRegex.test(email)) {
        checking[4].innerHTML = 'Please enter a valid email address.';
        return false;
    }

    // If all validations pass, return true
    return true;
}
 
function refresh(){
    const checking=document.getElementsByClassName('text-danger')
    let i=0;
   
    while(i<checking.length){
       
        checking[i].innerHTML=""
       
        i++
    }
}















// function validateForm() {
//     // Get form inputs
//     var name = document.Submission.name.value;
//     var username = document.Submission.username.value;
//     var email = document.Submission.email.value;
//     var password = document.Submission.password.value;
//     var confirmPassword = document.Submission.confirmPassword.value;
//     var otp = document.Submission.otp.value;

//     // Regular expressions for validation
//     var nameRegex = /^[a-zA-Z\s]+$/;
//     var usernameRegex = /^\w+$/;
//     var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     var passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
//     var otpRegex = /^\d{6}$/;

//     // Get error message element
//     var error = document.getElementById("error");

//     // Validate name
//     if (name === '') {
//         error.innerHTML = 'Please enter your full name.';
//         return false;
//     }
//     if (!nameRegex.test(name)) {
//         error.innerHTML = 'Name can only contain letters and spaces.';
//         return false;
//     }

//     // Validate username
//     if (username === '') {
//         error.innerHTML = 'Please enter a username.';
//         return false;
//     }
//     if (!usernameRegex.test(username)) {
//         error.innerHTML = 'Username can only contain letters, numbers, and underscores.';
//         return false;
//     }

//     // Validate password
//     if (password === '') {
//         error.innerHTML = 'Please enter a password.';
//         return false;
//     }
//     if (!passwordRegex.test(password)) {
//         error.innerHTML = 'Password must be at least eight characters, including at least one letter and one number.';
//         return false;
//     }

//     // Validate confirm password
//     if (confirmPassword === '') {
//         error.innerHTML = 'Please confirm your password.';
//         return false;
//     }
//     if (confirmPassword !== password) {
//         error.innerHTML = 'Passwords do not match.';
//         return false;
//     }

//     // Validate email
//     if (email === '') {
//         error.innerHTML = 'Please enter an email address.';
//         return false;
//     }
//     if (!emailRegex.test(email)) {
//         error.innerHTML = 'Please enter a valid email address.';
//         return false;
//     }

//     // Validate OTP
//     if (otp === '') {
//         error.innerHTML = 'Please enter the six-digit OTP.';
//         return false;
//     }
//     if (!otpRegex.test(otp)) {
//         error.innerHTML = 'Please enter a valid six-digit OTP.';
//         return false;
//     }

//     //If all validations pass, return true
//     return true;
// } 

