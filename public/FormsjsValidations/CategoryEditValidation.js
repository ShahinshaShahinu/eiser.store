function editCategoryValidation() {

    const categoryName = document.Submission.categoryName.value;
    const Date = document.Submission.Date.value;

    var err = document.getElementById("error-message");
      const categoryNameRegex  =  /^[A-Za-z]+$/;

    if (!categoryNameRegex.test(categoryName)) {
        err.innerHTML = 'Please enter Only Letters';
        return false;
    }
    if (categoryName == '') {
        err.innerHTML = 'Please enter  categoryName .';
        return false;
    }
    if (Date == '') {
        err.innerHTML = 'Please enter  Date ';
        return false;
    }


    return true;

}

function errorsClearing() {
    var err = document.getElementById("error-message");
    err.innerHTML = ''

}   