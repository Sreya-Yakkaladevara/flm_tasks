const mongoose = require('mongoose')
const userSchema = {
    name:"string",
    age:"Number",
    roll_no:"Number",
    address:"string"
}
const userModel = mongoose.model("student",userSchema);
module.exports={
    userModel,
}