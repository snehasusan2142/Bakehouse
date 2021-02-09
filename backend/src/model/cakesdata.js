const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://sneha:sneha@sneha.x0u7a.mongodb.net/bakery?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true });
const Schema= mongoose.Schema;


const CakesSchema = new Schema({
    name:String,
    details:String,
    price:String,
    img:String,
    rating:String,
    quantity:String,
    link:String,
    stock:Number
});

var Cakesdata = mongoose.model('cakesdata', CakesSchema);

module.exports = Cakesdata;