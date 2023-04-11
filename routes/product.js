var express = require('express');
var router = express.Router();

const getProduct=require('../controller/product')
const SessinOfAdmin=require('../Middleware/session')
/* GET Product  */

router.get('/adminproduct',getProduct.adminProduct)
router.get('/addProduct',getProduct.addproduct)
router.get('/addProduct',getProduct.createproduct)
router.get('/editProduct/:id',getProduct.editproduct)
router.get('/updation',getProduct.editing)
router.get('/admincategory',getProduct.category)
router.get('/DeleteProduct/:id',getProduct.productdelete)
router.get('/product',getProduct.product)

router.get('/Category',getProduct.adminCategory) 

router.get('/EditCategory/:id',getProduct.EditCategoryButton)
router.get('/adminEditCategorypage',getProduct.categoryEdit)
router.get('/RemoveCategory/:id',getProduct.RemoveCategory)
router.get('/DisableBannerbtn/:id',getProduct.DisableBannerbtn)
router.get('/enableBanner/:id',getProduct.enableBanner)
router.get('/DsableCoupon/:id',getProduct.DsableCoupon)
router.get('/EnableCoupon/:id',getProduct.EnableCoupon)

router.get('/CheckoutPage',SessinOfAdmin.adminSession,getProduct.CheckoutPageredirect)
router.get('/adminCheckout',SessinOfAdmin.adminSession,getProduct.adminCheckout)
router.get('/checkoutDetailsButton/:id',getProduct.checkoutDetailsButton)
router.get('/admincheckoutDetailsPage',SessinOfAdmin.adminSession,getProduct.admincheckoutDetailsPage)
router.get('/adminBanners',SessinOfAdmin.adminSession,getProduct.Banners)
router.get('/adminCoupon',SessinOfAdmin.adminSession,getProduct.adminCoupon);
router.get('/adminSalesReport',SessinOfAdmin.adminSession,getProduct.adminSalesReport)
router.get('/adminSales',getProduct.adminSales)


router.get('/adminDailySalesReport',SessinOfAdmin.adminSession,getProduct.adminDailySalesReport)



/* GET Product  */
/* GET Product  */


router.get('/Delivered/:id',getProduct.Delivered)
router.get('/Pending/:id',getProduct.Pending)
router.get('/Shipping/:id',getProduct.Shipping)
router.get('/Cancel/:id',getProduct.Cancel)
router.get('/orderControlStatus',SessinOfAdmin.adminSession,getProduct.orderControlStatus)
router.get('/MoneyReturnConfirm/:id',getProduct.MoneyReturnConfirm)
/* GET Product  */


const postProduct=require('../controller/product')

router.post('/addCategory',postProduct.AddCategory)
router.post('/SubmitProduct',postProduct.submitproduct)
router.post('/productupdatedSave/:id',postProduct.updatedSave)
router.post('/PostEditCaategory/:id',postProduct.postecategoryedit)
router.post('/SubmitAddbanner',postProduct.SubmitAddbanner)
router.post('/UploadCoupon',postProduct.UploadCoupon)






module.exports = router;
