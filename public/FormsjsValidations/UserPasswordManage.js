function UserPaswordManage() {

    const Currenpassword=document.Submission.Currenpassword.value;
    const Newpassword = document.Submission.Newpassword.value;
    const confirmPassword = document.Submission.confirmPassword.value;



    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;
    const CurrenpasswordRegex=/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;


    let checkingPassword = document.getElementsByClassName('text-danger')
  
    if (Currenpassword=='' && Newpassword == '' && confirmPassword == '' ) {
        let i = 0;
        while (i < checkingPassword.length) {
            checkingPassword[i].innerHTML = 'this field is empty'
            i++
        }
        return false
    }


    // Validate password
    if(Currenpassword==''){
        checkingPassword[0].innerHTML = 'Please enter a Curren Password.';
        return false ;
    }
    if(!CurrenpasswordRegex.test(Currenpassword)){
        checkingPassword[0].innerHTML = 'Password must be at least six characters, including at least one letter and one number.';
        return false ;
    }

    if (Newpassword=="") {
        checkingPassword[1].innerHTML = 'Please enter a password.';
        return false;
    }
    if (!passwordRegex.test(Newpassword)) {
        checkingPassword[1].innerHTML = 'Password must be at least six characters, including at least one letter and one number.';
        return false;
    }

    // Validate confirm password
    if (confirmPassword == '') {
        checkingPassword[2].innerHTML = 'Please enter confirm your password.';
        return false;
    }
    if (confirmPassword != Newpassword) {
        checkingPassword[2].innerHTML = 'Passwords do not match.';
        return false;
    }

    return true;

}


function clearUserPaswordManage() {
    const checkingPassword = document.getElementsByClassName('text-danger')
    let i = 0 ;
    while (i < checkingPassword.length) {
        checkingPassword[i].innerHTML = ""
        i++
    }
}