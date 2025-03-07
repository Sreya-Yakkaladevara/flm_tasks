const mongoose = require('mongoose');
const userSchema  =  mongoose.Schema({
    name : {  type  : String},
    email : {  type  : String,required:true}, 
    password : String,
    age : Number,
});
const usermodel = mongoose.model("userdetail", userSchema);
module.exports = {
usermodel
}