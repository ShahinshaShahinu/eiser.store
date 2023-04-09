const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Admin=require('../Mongoose/connecting')




const adminSchema = new mongoose.Schema({

  adminEmail: {
    type: String,
    require: true
  },
  adminPassword: {
    type: String,
    require: true,

  }

})

const adminCollection = new mongoose.model('admindata', adminSchema)





module.exports = {
  adminCollection,
}

