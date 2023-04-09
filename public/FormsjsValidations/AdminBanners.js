function AddBannerValidation() {

    const bannerTitle = document.Submission.bannerTitle.value;
    const subTitle = document.Submission.subTitle.value;
    const BannerImage = document.Submission.BannerImage.value;
    
    var err = document.getElementById("error-message");

    if (bannerTitle == '') {
        err.innerHTML = 'Please enter  bannerTitle .';
        return false;
    }
    if (subTitle == '') {
        err.innerHTML = 'Please enter  subTitle ';
        return false;
    }

    if (BannerImage == '') {
        err.innerHTML = 'Please Select Image'
        return false
    }


    return true;

}

function errorsClearing() {
    var err = document.getElementById("error-message");
    err.innerHTML = ''

}   