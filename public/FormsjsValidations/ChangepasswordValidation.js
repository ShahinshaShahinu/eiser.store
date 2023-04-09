function ChangePasswordvalidateform() {


    const password = document.Submission.password.value;
    const confirmPassword = document.Submission.confirmPassword.value;



    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;



    let checkingPassword = document.getElementsByClassName('text-danger')
  
    if (password == '' && confirmPassword == '') {
        let i = 0;
        while (i < checkingPassword.length) {
            checkingPassword[i].innerHTML = 'this field is empty'
            i++
        }
        return false
    }


    // Validate password


    if (password=="") {
        checkingPassword[0].innerHTML = 'Please enter a password.';
        return false;
    }
    if (!passwordRegex.test(password)) {
        checkingPassword[0].innerHTML = 'Password must be at least six characters, including at least one letter and one number.';
        return false;
    }

    // Validate confirm password
    if (confirmPassword == '') {
        checkingPassword[1].innerHTML = 'Please confirm your password.';
        return false;
    }
    if (confirmPassword != password) {
        checkingPassword[1].innerHTML = 'Passwords do not match.';
        return false;
    }

    return true;

}


function clearvalidateform() {
    const checkingPassword = document.getElementsByClassName('text-danger')
    let i = 0 ;
    while (i < checkingPassword.length) {
        checkingPassword[i].innerHTML = ""
        i++
    }
}