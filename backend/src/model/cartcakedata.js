const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://sneha:sneha@sneha.x0u7a.mongodb.net/bakery?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true });
const Schema= mongoose.Schema;


const CartSchema = new Schema({
  cake:Object,
   address:Object
    

},{ timestamps: true });

var CartCakesdata = mongoose.model('cartcakesdata', CartSchema);

module.exports = CartCakesdata;