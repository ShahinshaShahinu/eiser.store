function usercheckoutAddressValidation() {


    const firstname = document.Submission.firstname.value;
    const lastname = document.Submission.lastname.value;
    const phonenumber = document.Submission.phonenumber.value;
    const useremail = document.Submission.useremail.value;
    const country = document.Submission.country.value;
    const state = document.Submission.state.value;
    const district = document.Submission.district.value;
    const pincode = document.Submission.pincode.value;


    var err = document.getElementById("error-message");

    const nameRegex =/^[A-Za-z ]+$/;


    if (firstname == '') {
        err.innerHTML = 'Please enter firstname '

        return false;
    }
    if (firstname.length < 5) {
        err.innerHTML = 'Please enter atleast 5 charecter'
        return false;
    }
    if (!nameRegex.test(firstname)) {
        err.innerHTML = 'Name can only contain letters';
        return false;
    }
    if (lastname == '') {
        err.innerHTML = 'Please Select lastname'
        return false;
    }

    if (phonenumber == '') {
        err.innerHTML = 'Please enter phonenumber '
        return false;
    }

    if (phonenumber.length < 10) {
        err.innerHTML = 'Please enter  10 Number'
        return false;

    }
    if (useremail == '') {
        err.innerHTML = 'Please enter useremail '
        return false;
    }

    if (district == '') {
        err.innerHTML = 'Please enter district'
        return false;

    }
    if (country == '') {
        err.innerHTML = 'please Select Country '
        return false;

    }

    if (state == '') {
        err.innerHTML = 'please Select state '
        return false;

    }
    if (pincode == '') {
        err.innerHTML = 'please Enter pincode '

        return false;
    }
    if (pincode.length < 6) {
        err.innerHTML = 'Please enter atleast 6 charecter '
        return false;
    }


    return true;


}


function AddressClear() {

    var err = document.getElementById("error-message");
    err.innerHTML = ''

}