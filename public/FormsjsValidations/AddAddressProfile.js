function AddaddressValidation() {


    const fFirstname = document.Submission.Yourfirstname.value;
    const lLastname = document.Submission.Yourlastname.value;
    const phonenumber = document.Submission.Yourphonenumber.value;
    const useremail = document.Submission.Youruseremail.value;
    const country = document.Submission.Yourcountry.value;
    const state = document.Submission.Yourstate.value;
    const district = document.Submission.Yourdistrict.value;
    const pincode = document.Submission.Yourpincode.value;


    var err = document.getElementById("error-message");


    if (fFirstname == '') {
        err.innerHTML = 'Please enter firstname '

        return false;
    }
    if (fFirstname.length < 5) {
        err.innerHTML = 'Please enter atleast 5 charecter'
        return false;
    }
    if (lLastname == '') {
        err.innerHTML = 'Please Select lastname'
        return false;
    }

    if (phonenumber == '') {
        err.innerHTML = 'Please enter phonenumber '
        return false;
    }

    if (phonenumber.length < 10) {
        err.innerHTML = 'Please enter atleast 10 charecter'
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
        err.innerHTML = 'please Select CreatedDate '
        return false;

    }

    if (state == '') {
        err.innerHTML = 'please Select state '
        return false;

    }
    if (pincode == '') {
        err.innerHTML = 'please Select pincode '

        return false;
    }
    if (pincode.length < 6) {
        err.innerHTML = 'Please enter atleast 6 charecter '
        return false;
    }


    return true;


}


function ClearAddress() {

    var err = document.getElementById("error-message");
    err.innerHTML = ''

}