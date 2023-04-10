

const productData = require('../model/ProductsModule').ProductCollection
const userorders = require('../model/OrdersModel').userordersCollection
const banners = require('../model/BannerModel').bannersCollection
const Coupons = require('../model/adminCouponModel').CouponsCollection
const userData = require('../model/userModel').userCollection
fs = require('fs')
const { ObjectId } = require('mongodb');
const { error, log } = require('console')
const categoryData = require('../model/CategoryModel')
const { v4: uuidv4 } = require('uuid');
const { create } = require('hbs');
const { ADDRGETNETWORKPARAMS } = require('dns')

const sharp = require('sharp');
const async = require('hbs/lib/async')


let passing
let editingCategory
let erormsg
let categoryId
let Categorymsg
const category = async function (req, res) {

    let getCategoryData = await categoryData.find().lean()
    admins = req.session.admins
    if (admins) {
        message = req.session.popup

        res.render('admin_category', { getCategoryData, Categorymsg, erormsg, admins, message, layout: 'layout' })
        erormsg = null
    } else {
        res.redirect('/adminLogin')

    }

}


const EditCategoryButton = async (req, res) => {
    editingCategory = req.params.id;


    res.redirect('/adminEditCategorypage')
}

const categoryEdit = async (req, res, next) => {
    let editdata = await categoryData.findOne({ _id: editingCategory }).lean()

    admins = req.session.admins
    if (admins) {
        res.render('EditCategory', { editdata, Categorymsg, layout: 'layout' })
    } else {
        res.redirect('/adminLogin')

    }

}


const postecategoryedit = async (req, res) => {

    let categoryeditedId = req.params.id

    let findedCategory = await categoryData.findOne({ _id: categoryeditedId }).lean()

    if (findedCategory) {

        await categoryData.updateOne({ _id: categoryeditedId }, {
            $set: {
                categoryName: req.body.categoryName,
                Date: req.body.Date
            }
        })

        res.redirect('/admincategory')
    } else {
        res.redirect('/admincategor')
    }

}


const RemoveCategory = async (req, res, next) => {
    // console.log('ggggggg');
    let Deletecategory = req.params.id
    // console.log(Deletecategory + 'hhhhhhhhhh');
    await categoryData.deleteOne({ _id: Deletecategory })

    res.json({ ss: true })
}


const AddCategory = async (req, res, next) => {


    categoryId = {
        categoryName: req.body.categoryName,
        Date: req.body.Date,
    }

    categoryId.Date = new Date().toLocaleString();



    let categoryfind = await categoryData.findOne({ categoryName: categoryId.categoryName }).lean()



    if (categoryfind) {
        erormsg = 'Already existed Category'
        res.redirect('/admincategory')
    } else if (categoryId.categoryName == '') {
        erormsg = 'Please Enter category Name'
        res.redirect('/admincategory')

    } else if (categoryfind == null) {
        await categoryData.insertMany([categoryId])
        res.redirect('/admincategory')
    }



}




const adminCategory = (req, res) => {
    res.redirect('/admincategory')
}



const adminProduct = async function (req, res, next) {

    let getproductdata = await productData.find().lean()

    console.log(getproductdata[0].status);
    admins = req.session.admins
    if (admins) {

        res.render('admin_product', { getproductdata, layout: 'layout' })
    } else {
        res.redirect('/adminLogin')

    }

}




const submitproduct = async function (req, res, next) {

    let create = req.body

    create.Productid = uuidv4()
    create.status = true




    let products = {
        ProductName: req.body.ProductName,

    }
    req.body.Date = new Date().toLocaleString();
    //  new Date()

    let checkingAddproducts = await productData.findOne({ ProductName: products.ProductName }).lean()



    if (checkingAddproducts == null) {

        let image = []

        image = req.files.ProductImage

        let images = image.length
        if (images) {
            for (i = 0; i < image.length; i++) {
                let path = "" + image[i].tempFilePath
                // console.log('hhhhh');
                // console.log(path);
                await sharp(path)
                    .rotate()
                    .resize(250, 250)
                    .jpeg({ mozjpeg: true })
                    .toFile('./public/productsimg/' + create.Productid + i + '.jpg')

                //image[i].mv('./public/productsimg/' + create.Productid + i + '.jpg')
                image[i] = create.Productid + i + '.jpg'
            } create.ProductImage = image

        }
        else {
            let path = "" + image.tempFilePath
            // console.log(path);
            await sharp(path)
                .rotate()
                .resize(260, 260)
                .jpeg({ mozjpeg: true })
                .toFile('./public/productsimg/' + create.Productid + '.jpg')


            //image.mv('./public/productsimg/' + create.Productid + '.jpg')

            create.ProductImage = create.Productid + '.jpg'
        }


        await productData.insertMany([create])

        res.redirect('/adminproduct')


    } else {

        erormsg = 'Already existed '
        res.redirect('/addProduct')
    }


}



const addproduct = async (req, res) => {

    let categoryadding = await categoryData.find().lean()


    admins = req.session.admins

    if (admins) {
        res.render('admin_addProduct', { categoryadding, erormsg, layout: 'layout' })
        erormsg = null
    } else {
        res.redirect('/adminLogin')

    }



}


const createproduct = (req, res) => {

    res.redirect('/adminproduct')
}



const product = function (req, res) {

    res.redirect('/adminproduct')
}






const editproduct = (req, res) => {
    passing = req.params.id

    res.redirect('/updation')
}

const editing = async (req, res) => {

    let getpass = await productData.findOne({ _id: passing }).lean()
    let categoryadding = await categoryData.find().lean()
    admins = req.session.admins
    console.log(getpass);
    if (admins) {
        res.render('UpdateProduct', { getpass, categoryadding, layout: 'layout' })
    } else {
        res.redirect('/adminLogin')

    }

}

// edit Product button  update  POST //

const updatedSave = async (req, res) => {

    const postid = req.params.id

    let bodyDatas = req.body

    let image = []


    image = req.files.ProductImage


    let images = image.length

    if (images > 1) {
        for (var i = 0; i < image.length; i++) {
            image[i].mv('./public/productsimg/' + bodyDatas.Productid + i + '.jpg')
            image[i] = bodyDatas.Productid + i + '.jpg'
        }

        bodyDatas.image = image

    } else {

        image.mv('./public/productsimg/' + bodyDatas.Productid + '.jpg')
        bodyDatas.image = bodyDatas.Productid + '.jpg'

    }


    let k = await productData.updateOne({ _id: postid }, {
        $set: {
            ProductName: bodyDatas.ProductName,
            ProductPrice: bodyDatas.ProductPrice,
            Productid: bodyDatas.Productid,
            ProductImage: bodyDatas.ProductImage,
            ProductCategory: bodyDatas.ProductCategory,
            stocks: bodyDatas.stocks,
            ProductDescription: bodyDatas.ProductDescription,
            status: true,
        }
    })


    res.redirect('/adminproduct')
}

// edit Product button  update  POST //

const productdelete = async function (req, res) {

    disable = req.params.id

    await productData.updateOne({ _id: disable }, { $set: { status: false } })

    res.redirect('/adminproduct')
}





//admin checkout if user checkout address and all details //

let findOrdered

const adminCheckout = async (req, res) => {

    findOrdered = await userorders.find({}).lean()

    // console.log(findOrdered);


    res.render('admin_Checkout', { findOrdered, layout: 'layout' })
}



const CheckoutPageredirect = (req, res) => {

    res.redirect('/adminCheckout')
}

let orderprodectAddressId

let userOrderProducts
let DetailuserOrderProducts
let cccc = orderprodectAddressId


const checkoutDetailsButton = async (req, res) => {

    try {

        orderprodectAddressId = req.params.id

        cccc = orderprodectAddressId

        console.log(cccc);
        console.log(cccc);
        console.log(cccc); console.log('ggggggggggg'); console.log('ggggggggggg'); console.log('ggggggggggg');

        userOrderProducts = await userorders.aggregate([{ $match: { _id: new ObjectId(orderprodectAddressId) } }, { $unwind: '$Orderproducts' }, { $project: { Orderproducts: '$Orderproducts.Products', deliveryAddress: '$deliveryAddress', status: '$status', _id: '$_id', quantity: 1, CartProductId: '$CartProductId' } }])

        DetailuserOrderProducts = await userorders.findOne({ _id: new ObjectId(orderprodectAddressId) }).lean()

        //  usercartAllProducts paymentid

        console.log(userOrderProducts.quantity);
        console.log(userOrderProducts.quantity);



        let ggggg = await userorders.findOne({ _id: new ObjectId(orderprodectAddressId) }, { "Orderproducts.quantity": 1 }).lean()


        res.redirect('/admincheckoutDetailsPage')
    } catch (error) {

        res.redirect('/ErrorPage')


    }


}


const admincheckoutDetailsPage = async (req, res) => {

    try {



        userOrderProducts = await userorders.aggregate([{ $match: { _id: new ObjectId(orderprodectAddressId) } }, { $unwind: '$Orderproducts' }, { $project: { Orderproducts: '$Orderproducts.Products', deliveryAddress: '$deliveryAddress', Delivered: '$Delivered', status: '$status', _id: '$_id' } }])



        let checkOrderStatus = await userorders.findOne({ _id: new ObjectId(orderprodectAddressId) }).lean()

        let Return=checkOrderStatus.Delivered
        console.log(Return);   console.log(Return);   console.log(Return);
        if (checkOrderStatus.status == 'Delivered'||Return=='Returned Confirm'||Return=='Delivered'||Return=='MoneyReturned') {

            orderprodectAddressId = null

            console.log(checkOrderStatus.status); console.log(checkOrderStatus.status); console.log(userOrderProducts.status);

            res.render('admin_checkoutDetail', { userOrderProducts, DetailuserOrderProducts, orderprodectAddressId, layout: 'layout' })
        }






        res.render('admin_checkoutDetail', { userOrderProducts, DetailuserOrderProducts, orderprodectAddressId, layout: 'layout' })



        console.log('ffffff'); console.log('ffffff'); console.log('ffffff'); console.log('ffffff');








    } catch (error) {
        console.log(error);
        res.redirect('/ErrorPage')
    }


}



const MoneyReturnConfirm = async (req, res) => {
    req.session.IdReturnMoney = req.params.id

    console.log(user);
    let ReturnProductPrice = await userorders.findOne({ _id: new ObjectId(req.session.IdReturnMoney) }).lean()
    console.log(ReturnProductPrice.orderduser);
    req.session.orderduser = ReturnProductPrice.orderduser

    await userData.updateOne({ username: req.session.orderduser }, { $inc: { wallet: ReturnProductPrice.grandTotal } });

    await userorders.updateOne({ _id: new ObjectId(req.session.IdReturnMoney) }, { $set: { Delivered: 'MoneyReturned' } })

    res.json({ returnStatus: true })
}






const Banners = async (req, res) => {


    let allBanners = await banners.find().lean()

    res.render('admin-Banners', { allBanners, layout: 'layout' })
}

let banerbody

const SubmitAddbanner = async (req, res) => {



    let bannerbody = req.body

    bannerbody.bannerId = uuidv4()

    bannerbody.status = true



    let checkBannerdata = await banners.findOne({ bannerId: req.body.bannerId }).lean()

    if (checkBannerdata == null) {

        let BnrImage = []

        BnrImage = req.files.BannerImage



        if (BnrImage) {

            BnrImage.mv('./public/BannerImages/' + bannerbody.bannerId + '.jpg')

            bannerbody.BannerImage = bannerbody.bannerId + '.jpg'

        }
        banerbody = await banners.insertMany([bannerbody])

        // console.log(banerbody);
        res.redirect('/adminBanners')
    } else {

        res.redirect('/adminBanners')

    }

}



//------------ Banner------------ //

const DisableBannerbtn = async (req, res) => {

    var bannerId = req.params.id

    await banners.updateOne({ _id: bannerId }, { $set: { status: false } })



    let f = await banners.findOne({ _id: bannerId }).lean()

    // console.log(f);


    res.redirect('/adminBanners')

}


const enableBanner = async (req, res) => {

    var bannerId = req.params.id

    await banners.updateOne({ _id: bannerId }, { $set: { status: true } })

    res.redirect('/adminBanners')
}



const adminCoupon = async (req, res) => {

    let CouponsData = await Coupons.find().lean()

    res.render('admin_Coupon', { CouponsData, layout: 'layout' })

}

const UploadCoupon = async (req, res) => {

    let couponsdatas = req.body


    couponsdatas.CouponStatus = true


    await Coupons.insertMany([couponsdatas])


    res.redirect('/adminCoupon')
}

const DsableCoupon = async (req, res) => {


    await Coupons.updateOne({ _id: req.params.id }, { $set: { CouponStatus: false } })

    res.redirect('/adminCoupon')
}

const EnableCoupon = async (req, res) => {

    await Coupons.updateOne({ _id: req.params.id }, { $set: { CouponStatus: true } })
    res.redirect('/adminCoupon')
}

let getOrderedStatus



const orderControlStatus = async (req, res) => {
    let dd = await userorders.aggregate([{ $match: { _id: new ObjectId(orderprodectAddressId) } }, { $unwind: '$Orderproducts' }, { $project: { Orderproducts: '$Orderproducts.Products', deliveryAddress: '$deliveryAddress', status: '$status', _id: '$_id' } }])
    userOrderProducts = dd



    res.render('admin_checkoutDetail', { userOrderProducts, DetailuserOrderProducts, layout: 'layout' })

}






const Delivered = async (req, res) => {


    try {


        let orderStatusId = req.params.id



        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { status: 'Delivered' } })
        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { Delivered: 'Delivered' } })     
        res.redirect('/admincheckoutDetailsPage')
        let salesDate = new Date().toLocaleDateString()
        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { salesDate: salesDate } })




    } catch (error) {
        console.log(error);
        res.redirect('/ErrorPage')

    }

}



const Shipping = async (req, res) => {

    try {
        let orderStatusId = req.params.id

        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { status: 'Shipping' } })

        res.redirect('/admincheckoutDetailsPage')
    } catch (error) {

        console.log(error);
        res.redirect('/ErrorPage')

    }


}


const Pending = async (req, res) => {

    try {

        let orderStatusId = req.params.id

        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { status: 'Pending' } })

        res.redirect('/admincheckoutDetailsPage')


    } catch (error) {
        console.log(error);
        res.redirect('/ErrorPage')

    }


}

const Cancel = async (req, res) => {
    try {
        let orderStatusId = req.params.id

        await userorders.updateOne({ _id: new ObjectId(orderStatusId) }, { $set: { status: 'Cancel' } })

        res.redirect('/admincheckoutDetailsPage')

    } catch (error) {
        console.log(error);
        res.redirect('/ErrorPage')

    }


}


const adminSales = (req, res) => {

    req.session.AllSalesReport = req.query.name

    res.redirect('/adminSalesReport')
}


const adminSalesReport = async (req, res) => {

    let AllSalesReport = req.session.AllSalesReport
    if (AllSalesReport) {
        console.log(AllSalesReport); console.log(AllSalesReport); console.log(AllSalesReport);
        req.session.salefilt = null
        req.session.saleMonthly = null

    }
    let Sales

    let SalesReport = req.session.salefilt
    let Monthly = req.session.saleMonthly
    if (Monthly) {
        console.log(Monthly);
        console.log('Monthly'); console.log('Monthly'); console.log('Monthly');
        Sales = Monthly
    }

    if (SalesReport) {
        console.log('Daily'); console.log('Daily'); console.log('Daily');
        Sales = SalesReport
    }

    if (!Monthly && !SalesReport) {
        let AllSales = await userorders.aggregate([{ $match: { status: 'Delivered' } }, { $unwind: '$Orderproducts' }, { $project: { Orderproducts: '$Orderproducts.Products', paymentmethod: '$paymentmethod', quantity: '$Orderproducts.quantity', salesDate: '$salesDate', deliveryAddress: '$deliveryAddress', grandTotal: '$grandTotal' } }])
        console.log('AllSales'); console.log('AllSales'); console.log('AllSales');
        Sales = AllSales
        res.render('admin_salesReport', { Sales, layout: 'layout' })
    }


    res.render('admin_salesReport', { Sales, layout: 'layout' })



}












let salesquery
const adminDailySalesReport = async (req, res) => {

    salesquery = req.query.name
    console.log(salesquery);


    if (salesquery == "Day") {

        req.session.saleMonthly = null
        req.session.AllSalesReport = null

        const today = new Date().toLocaleDateString();

        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowFormatted = tomorrow.toLocaleDateString();


        let salesReportfilt = await userorders.aggregate([
            {
                $unwind: '$Orderproducts'
            },
            {
                $match: { status: "Delivered" }
            },
            {
                $match: {
                    salesDate: {
                        $gte: today,
                        $lte: tomorrowFormatted
                    }
                }
            },
            {
                $project: { Orderproducts: '$Orderproducts.Products', paymentmethod: '$paymentmethod', quantity: '$Orderproducts.quantity', salesDate: '$salesDate', deliveryAddress: '$deliveryAddress', grandTotal: '$grandTotal' }
            }

        ]);


        req.session.salefilt = salesReportfilt

    }


    if (salesquery == 'Month') {
        req.session.salefilt = null
        req.session.AllSalesReport = null


        const currentDate = new Date(); // current date and time
        const currentMonth = currentDate.getMonth(); // zero-based index of current month (e.g. 0 for January)
        const currentYear = currentDate.getFullYear(); // current year

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).toLocaleDateString()
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).toLocaleDateString()
        console.log(firstDayOfMonth);
        console.log(lastDayOfMonth);

        let salesReportfilt = await userorders.aggregate([
            {
                $unwind: '$Orderproducts'
            },
            {
                $match: { status: "Delivered" }
            },
            {
                $match: {
                    salesDate: {
                        $gte: firstDayOfMonth,
                        $lte: lastDayOfMonth
                    }
                }
            },
            {
                $project: { Orderproducts: '$Orderproducts.Products', paymentmethod: '$paymentmethod', quantity: '$Orderproducts.quantity', salesDate: '$salesDate', deliveryAddress: '$deliveryAddress', grandTotal: '$grandTotal' }
            }

        ]);

        req.session.saleMonthly = salesReportfilt


    }




    res.redirect('/adminSalesReport')
}








const adminMonthlySalesReport = async (req, res) => {


    res.redirect('/adminSalesReportbase')
}


module.exports = {

    adminProduct,
    addproduct,
    editproduct,
    updatedSave,
    product,
    adminSales,
    category,
    createproduct,
    submitproduct,
    productdelete,
    editing,
    EditCategoryButton,
    categoryEdit,
    postecategoryedit,
    RemoveCategory,
    AddCategory,
    adminCategory,
    adminCheckout, CheckoutPageredirect, checkoutDetailsButton, admincheckoutDetailsPage,
    Banners, SubmitAddbanner, DisableBannerbtn, enableBanner,
    adminCoupon, UploadCoupon, DsableCoupon, EnableCoupon, orderControlStatus,
    Delivered, Pending, Shipping, Cancel,
    adminSalesReport, adminDailySalesReport, adminMonthlySalesReport, MoneyReturnConfirm

}

