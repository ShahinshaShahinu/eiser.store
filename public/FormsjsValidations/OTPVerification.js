
function  OTPvalidateform(){

var otp = document.Submission.otp.value;

var error = document.getElementById("error");

var otpRegex = /^\d{6}$/;


    // Validate OTP

    if (otp === '') {
        error.innerHTML = 'Please enter the six-digit OTP.';
        return false;
    }
    if (!otpRegex.test(otp)) {
        error.innerHTML = 'Please enter a valid six-digit OTP.';
        return false;
    }

}