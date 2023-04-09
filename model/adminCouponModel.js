const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Coupn=require('../Mongoose/connecting')


const CouponSchema = new mongoose.Schema({

    CouponCode:{
     type:String,
     required:true,
    },
    DiscountType:{
        type:String,
        require:true
    },
    MaxAmount:{
    type:String,
    require:true
    },
    MinimumPurchase:{
        type:Number,
        require:true,
    },
    DiscountAmount:{
        type:Number,
        require:true

    },
    CreatedDate:{               
        type:String, 
        require:true
    },
    ExpiryDate:{
        type:String,
        require:true
    },
    CouponStatus:{
        type:Boolean,
        require:true
    },
   
   
  
          
    
})

const CouponsCollection = new mongoose.model('Coupons', CouponSchema  )

module.exports = { CouponsCollection }

