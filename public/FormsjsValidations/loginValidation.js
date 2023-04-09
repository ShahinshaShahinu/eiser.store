function Loginvalidateform() {
    const username = document.Submission.username.value;
    const password = document.Submission.password.value;

    // const error = document.getElementById("error");

    const usernameRegex = /^\w+$/;
    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/;

    let chekkingLogin = document.getElementsByClassName('text-danger')

    if (username == '' && password == '') {
        let i = 0
        while (i < chekkingLogin.length) { 
           
            chekkingLogin[i].innerHTML = 'this field is empty'
            i++
        }
        return false
    }

    // Validate username
    if (username == '') {
        chekkingLogin[0].innerHTML = 'Please enter a username.';
        return false;
    }
    if (username.length < 5) {
        chekkingLogin[0].innerHTML = 'Please enter atleast 5 charecter';
        return false;
    }
    if (!usernameRegex.test(username)) {
        chekkingLogin[0].innerHTML = 'Username can only contain letters, numbers, and underscores.';
        return false;
    }

    // Validate password
    if (password == '') {
        chekkingLogin[1].innerHTML = 'Please enter a password.';
        return false;
    }
    if (!passwordRegex.test(password)) {
        chekkingLogin[1].innerHTML = 'Password must be at least six characters, including at least one letter and one number.';
        return false;
    }

    return true;

}

function clearingerror() {
    const chekkingLogin = document.getElementsByClassName('text-danger')
    let i = 0;
    while (i < chekkingLogin.length) {
        chekkingLogin[i].innerHTML = ""
        i++
    }
}       