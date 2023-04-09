function Emailvalidateform(){

    var email = document.Submission.email.value;

    var error = document.getElementById("error");

    var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


    if (email === '') {
        error.innerHTML = 'Please enter an email address.';
        return false;
    }
    if (!emailRegex.test(email)) {
        error.innerHTML = ' Invalid email address.';
        return false;
    }

    // If all validations pass, return true
    return true;

} 