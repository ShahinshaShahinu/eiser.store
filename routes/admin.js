
var express = require('express');
var router = express.Router();

const adminData =require('../model/adminModel').adminCollection

const getadmin=require('../controller/admin')


/* GET ADMIN  */


var nocache=require('nocache')

router.get('/adminLogin',nocache(),getadmin.adminLogin)
router.get('/admonLogoutButton',nocache(),getadmin.admonLogoutButton)
router.get('/adminDashboard',nocache(),getadmin.dashboard)
router.get('/adminUsers',getadmin.customers)
router.get('/customers',getadmin.adminusers)
router.get('/blockUser/:id',getadmin.blockeduser)
router.get('/unBlockUser/:id',getadmin.unBlockedUser)


/* POST ADMIN  */


const postadmin=require('../controller/admin')

router.post('/adminpost',postadmin.postAdminLogin)

module.exports = router;
 