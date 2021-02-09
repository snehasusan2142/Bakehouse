const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://sneha:sneha@sneha.x0u7a.mongodb.net/bakery?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true });
const Schema= mongoose.Schema;

const UserSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    permission:String
});

var Userdata = mongoose.model('userdata', UserSchema);

module.exports = Userdata;