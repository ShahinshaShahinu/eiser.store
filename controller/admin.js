const adminData = require('../model/adminModel').adminCollection

const userData = require('../model/userModel').userCollection

const userorders = require('../model/OrdersModel').userordersCollection


const async = require('hbs/lib/async');
var swal = require('sweetalert');


let adminloginerr;
let message

const customers = async function (req, res, next) {



    let everyuserrr = await userData.find().lean()
    admins = req.session.admins
    if (admins) {
        res.render('admin_users', { everyuserrr , layout: 'layout'})
    } else {
        res.redirect('/adminLogin')

    }
} 


const blockeduser = async (req, res,next) => {
    let blockeduserid = req.params.id


   let v= await userData.updateOne({ _id: blockeduserid }, { $set: { status: false } })
    
    // req.session.user=null
    
console.log(v);
    res.redirect('/adminUsers')

}

const unBlockedUser = async (req, res,next) => {
    let Unblockeduserid = req.params.id

    await userData.updateOne({ _id: Unblockeduserid }, { $set: { status: true } })

    res.redirect('/adminUsers')
}

const adminusers = (req, res) => {
    res.redirect('/adminUsers')
}


const dashboard =async function (req, res) {
    message =req.session.popup
    let ww=new Date().toLocaleDateString()
    console.log(ww);
    let tt=new Date().toDateString()
    console.log(tt);
    admins = req.session.admins
    if (admins) {
        errRemove=req.session.admins

        let countDelivered = await userorders.aggregate([
            { $match: { status: 'Delivered' } },
            { $unwind: '$Orderproducts' },
            { $project: { _id: 1 } },
            { $count: 'delivered_count' }
          ])

          let Deliveredcount = countDelivered.map(doc => doc.delivered_count)[0];
          
            let ActiveUser= await userData.find({status:true}).lean()
            let TotalActivers=   ActiveUser.length 

            let Blocked=await userData.find({status:false}).lean()
            let BlockedUser=Blocked.length

            user = req.session.username

            let orderDelivers = await userorders.aggregate([{ $match: {status:'Delivered' } }, { $unwind: '$Orderproducts' },{$group:{_id:null,sum:{$sum:'$Orderproducts.totalPrice'}}},{$project:{_id:0}}])

            let TotalRevenue
            let TOtalDeliver = await userorders.aggregate([{ $match: {status:'Delivered' } }, { $unwind: '$Orderproducts' },{$project:{status:'$status'}}])

if(orderDelivers.length>0){
    if(TOtalDeliver[0].status=='Delivered'){
        TotalRevenue=orderDelivers[0].sum 
 }else{
     TotalRevenue=0
 }
}else{
    TotalRevenue=0
}

// console.log(orderDelivers[0].sum );


 let DeliveredProduct = await userorders.find({status:'Delivered' }).count().lean()
if(DeliveredProduct==null){
    DeliveredProduct=0
}
console.log(DeliveredProduct);
let PendingProduct = await userorders.find({status:'Pending' }).count().lean()


        res.render('admin_Panel',{errRemove,Deliveredcount,TotalActivers,BlockedUser,TotalRevenue,DeliveredProduct,PendingProduct , layout: 'layout'})
    } else {
        res.redirect('/adminLogin')

    }

}   

const adminLogin = (req, res, next) => {
    admins = req.session.admins

    if (admins) {
        req.session.admins=true;
        req.session.popup=true
        res.redirect('/adminDashboard')
    } else {

        res.render('admin_Login', { adminloginerr ,layout:'layout' })
        adminloginerr = null
    }   

}

const admonLogoutButton = (req, res) => {
    req.session.admins = null
    res.redirect('/adminLogin')

}


const postAdminLogin = async (req, res, next) => {

    let data = {
        adminEmail: req.body.email,
        adminPassword: req.body.password   

    }

    let admin = await adminData.findOne({ adminEmail: data.adminEmail  }).lean()

    

    if (admin == null) {
        adminloginerr = 'invalid user name and password '
        res.redirect('/adminLogin')
    } else {
        if (admin.adminPassword == data.adminPassword) {
            req.session.admins = data.adminEmail
            req.session.popup=true
            res.redirect('/adminDashboard')
        } else {
            adminloginerr = 'invalid Password'
            res.redirect('/adminLogin')
        }
    }


}




















module.exports = {
    adminLogin, postAdminLogin,
    dashboard, customers, blockeduser,
    unBlockedUser, adminusers, admonLogoutButton,
   
}