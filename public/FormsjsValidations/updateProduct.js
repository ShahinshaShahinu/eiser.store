    function updateProductValidation() {


    const ProductName = document.Submission.ProductName.value;
    const ProductPrice = document.Submission.ProductPrice.value;
    const ProductCategory = document.Submission.ProductCategory.value;
    const stocks = document.Submission.stocks.value;
    const ProductDescription = document.Submission.ProductDescription.value;
    const ProductImage = document.Submission.ProductImage.value;
    // const Productid=document.Submission.Productid.value;

    const ProductNameRegex = /^[a-zA-Z].*[\s\.]*$/;
    const ProductPriceRegex =/^-?\d+(\.\d+)?$/
    
          

    let productCheck = document.getElementsByClassName('text-danger')

    if (ProductName == '' && ProductPrice == '' &&stocks==''&&ProductDescription=='') {

        let i = 0;
        while (i < productCheck.length) {

            productCheck[i].innerHTML = 'this field is empty'
            i++
        }
        return false;
    }

    if (ProductName == '') {
        productCheck[0].innerHTML = 'Please enter  Product name.';
        return false;
    }

    if (ProductName.length < 3) {
        productCheck[0].innerHTML = 'Please enter atleast 3 charecter';
        return false;

    }

    if (!ProductNameRegex.test(ProductName)) {
        productCheck[0].innerHTML = 'Name can only contain letters and Numbers';
        return false

    }
    if (ProductPrice == '') {
        productCheck[1].innerHTML = 'Please enter Product Price ';
        return false
    }
    if (!ProductPriceRegex.test(ProductPrice)) {
        productCheck[1].innerHTML = 'Please enter Only contain Numbers';
        return false
    }
    if(stocks==''){
        productCheck[2].innerHTML = 'Please Select  stocks'
        return false
    }
    if(ProductDescription==''){
        productCheck[3].innerHTML = 'Please Select  ProductDescription'
        return false
    }
    if (ProductCategory == '') {
        productCheck[4].innerHTML = 'Please Select  Category'
        return false
    }


}

function errorsClearing() {

    const productCheck = document.getElementsByClassName('text-danger')
    let i = 0   

    while (i < productCheck.length) {
        productCheck[i].innerHTML = ''
        i++
    }

} 