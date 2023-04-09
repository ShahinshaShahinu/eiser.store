const mongoose=require('mongoose')

mongoose.set('strictQuery',false)

const whishlist=require('../Mongoose/connecting')

const wishlistSchema = new mongoose.Schema({  

      
    wishlist: {
       type: Array,
       require: true
    },
    user: {
       type: String,
       require: true
    }
    
 
 
 })
 
 const UserwishlistData=new mongoose.model('wishlistData',wishlistSchema)

 module.exports={UserwishlistData}         