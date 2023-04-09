const { Router } = require('express');
var express = require('express');
// const getHome  = require('../controller/admin');
var router = express.Router();
const userData = require('../model/userModel').userCollection
var nocache=require('nocache');
const { Redirect, Pay } = require('twilio/lib/twiml/VoiceResponse');
const gethome = require('../controller/user')
const sessions=require('../Middleware/session')



// get user //

router.get('/',nocache(), gethome.getUserHome);
router.get('/userSignup',nocache(), gethome.signupPage)
router.get('/userLogin',nocache(), gethome.Loginpage)
router.get('/ErrorPage',sessions.sessioncheck,gethome.ErrorPage)
router.get('/signUpLogInButton',nocache(),gethome.signUpLogInButton)
router.get('/OTPSendChangePassword',nocache(),gethome.OTPSendChangePassword)

// router.get('/ChangepasswordEmailOTP',nocache(),gethome.EmailOTPChangepassword)

router.get('/Forgotpassword',nocache(),gethome.EmailOTPChangepassword)
router.get('/OTPcheck',nocache(),gethome.OTPcheck)
router.get('/LogoutButton',nocache(),gethome.LogoutButton)
router.get('/PasswordChange',nocache(),gethome.ChangePassword)
router.get('/PasswordManage',gethome.UserPasswordManage)

router.get('/OTPLogin',gethome.OTPLogin)
router.get('/LoginOTPCheck',gethome.LoginOTPCheck)
// !--================ start shopping Area =================--//


router.get('/Shop',gethome.shop)
router.get('/allProduct',gethome.allproduct)
router.get('/Navbarcategory/:categoryName',gethome.Navbarcategory)
router.get('/Showcategory',gethome.ShowProductCategory)
router.get('/user-ShowProduct/:id',gethome.ShowProduct)
router.get('/ShowSingleProduct',gethome.SingleProduct)
router.get('/userProfile',gethome.userProfile)
router.get('/user-CartPage',gethome.UserCartPage)
router.get('/addressChoosedAddBtn/:indexof',gethome.addressChoosedAddBtn)

//!--================Start please Check =================--//

router.get('/yourCarts',gethome.CartPageIdRedirect)
router.get('/userorders',sessions.sessioncheck,gethome.userorderspage)



router.get('/userordersdetails/:id',gethome.userordersdetails)
router.get('/userordersdetails',sessions.sessioncheck,gethome.userordersdetailsPage)
router.get('/userwishlist',sessions.sessioncheck,gethome.userwishlist)
router.get('/addwishlist/:Productid',sessions.sessioncheck,gethome.addwishlist)
router.get('/deleteWhishlist/:Productid',gethome.deleteWhishlist)
router.get('/addToCart/:Productid',gethome.addToCart)  
//!--================ End Start please Check  =================--//

router.get('/UserCheckout',nocache(),gethome.UserCheckout)
router.get('/RemoveCartDocument/:id/:CartProductId',gethome.RemoveCartDocument) 
router.get('/OrderSuccessfull',sessions.sessioncheck,gethome.OrderSuccessfull)      
router.get('/Razorpay',gethome.Razorpay)
router.get('/ReturnProduct/:_id', gethome.ReturnProduct);
router.get('/useraddressProfile',sessions.sessioncheck,gethome.useraddressProfile)
   

 
     
router.get('/sortTwothousand',sessions.sessioncheck,gethome.sortTwothousand)
router.get('/sortFiftynThousand',sessions.sessioncheck,gethome.sortFiftynThousand)
router.get('/sortOneLakh',sessions.sessioncheck,gethome.sortOneLakh)
router.get('/SortOneLakhAbove',sessions.sessioncheck,gethome.SortOneLakhAbove)
// router.get('/shopProduct',gethome.shopProduct)
//!--================ End Get  Area =================--//                                                   


const postdata = require('../controller/user')
// post user // 

router.post('/signup/home', postdata.postSignup)
router.post('/userPostLogin',postdata.postLogin)
router.post('/Emailchangepassword',postdata.Emailchangepassword)
router.post('/OTPPost',postdata.OTPPost)
router.post('/changepasswordPOST',postdata.changepasswordPOST)
router.post('/UserAddress',postdata.Addressuser)
router.post('/AddToCart/:id',postdata.AddToCart)
router.post('/AddNewAddress',postdata.AddNewAddress)
router.post('/getFruits',postdata.search)
router.post('/changeProdctquantity',postdata.ChangequantityProduct)
router.post('/ChangePasswordManage',postdata.UserProfilePasswordChange)
router.post('/UserProfileAddress',postdata.UserProfileAddress)
      



router.post('/allorder',postdata.allorder)
router.post('/applyCoupn',postdata.applyCoupn)
router.post('/verifyPayment',postdata.verifyPayment)
// router.post('/OTPSendLogin',postdata.OTPSendLogin)
router.post('/EmailOTPLogin',postdata.EmailOTPLogin)
// router.post('/ee',postdata.EmailOTPLogin)
router.post('/LoginOTPPost',postdata.LoginOTPPost)

router.get('/vv',gethome.vv)



module.exports = router;
       