function AddCouponValidation() {


    const CouponCode = document.Submission.CouponCode.value;
    const DiscountType = document.Submission.DiscountType.value;
    const MinimumPurchase = document.Submission.MinimumPurchase.value;
    const DiscountAmount = document.Submission.DiscountAmount.value;
    const CreatedDate = document.Submission.CreatedDate.value;
    const ExpiryDate = document.Submission.ExpiryDate.value;


    var err=document.getElementById("error-message");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

    if (CouponCode == '') {
        err.innerHTML='Please enter CouponCode '

        return false;
    }
    if (CouponCode.length < 5) {
        err.innerHTML = 'Please enter atleast 5 charecter'
        return false;
    }
    if (DiscountType == '') {
        err.innerHTML = 'Please Select DiscountType'
        return false;
    }  
    
    if (MinimumPurchase == '') {
        err.innerHTML = 'Please enter MinimumPurchase '
        return false;
    }

    if (MinimumPurchase.length < 3) {
        err.innerHTML = 'Please enter atleast 3 charecter'
        return false;

    }
    if (DiscountAmount == '') {
        err.innerHTML = 'Please enter DiscountAmount '
        return false;
    }

    if (DiscountAmount.length < 3) {
        err.innerHTML = 'Please enter atleast 3 charecter'
        return false;

    }
    if (CreatedDate=='') {
        err.innerHTML='please Select CreatedDate '
        return false;

    }

    if (ExpiryDate=='') {
        err.innerHTML='please Select Expiry date '
        return false;

    }


    return true;    

}
     
function errorsClearing() {
    var err=document.getElementById("error-message");
    err.innerHTML=''

}   