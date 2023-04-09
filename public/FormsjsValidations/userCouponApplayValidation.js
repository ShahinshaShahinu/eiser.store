function UserCouponValidation() {

    const CouponCode = document.Submission.CouponCode.value;




    var err = document.getElementById("error-message");



    // if (CouponCode.length < 5) {
    //     err.innerHTML = 'Please enter atleast 5 charecter'
    //     return false;
    // }

    if (CouponCode == '') {
        err.innerHTML = 'Please enter CouponCode '

        return false;
    }

    return true;   

}



function CouponerrorsClearing() {

    var err = document.getElementById("error-message");

    err.innerHTML = ''


}