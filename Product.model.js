const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/nem29');

var productSchema = mongoose.Schema({
    title:"String",
    price:Number
})
var Product = mongoose.model("Product",productSchema);
module.exports=Product;