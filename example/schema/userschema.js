const mongoose = require('mongoose');
const userschema = mongoose.Schema({
    email : {type:String,required:true},
    name: String,
    age:Number,
    password:String

});
const usermodel = mongoose.model("user1",userschema);
module.exports={
    usermodel
}