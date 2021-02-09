const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://sneha:sneha@sneha.x0u7a.mongodb.net/bakery?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true });
const Schema= mongoose.Schema;


const FeedbackSchema = new Schema({
    
    message:String,
    user:String
});

var Feedbackdata = mongoose.model('Feedbackdata', FeedbackSchema);

module.exports = Feedbackdata;