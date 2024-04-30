const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    rating:String, 
    imageUrl: String,
    price: String,

})

 const DataModel = mongoose.model("data", DataSchema)
 module.exports = DataModel