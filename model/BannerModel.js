const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Banner=require('../Mongoose/connecting')



const BannerSchema = new mongoose.Schema({

    BannerImage:{
     type:Array,
     required:true,
    },
    bannerTitle:{
        type:String,
        require:true
    },
    subTitle:{
        type:String,
        require:true

    },
 
    status:{
        type:Boolean,
        require:true,
    },

    bannerId:{
        type:String,
        require:true
    }


    
})

const bannersCollection = new mongoose.model('banners', BannerSchema  )

module.exports = { bannersCollection }

