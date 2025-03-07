const mongoose = require('mongoose');
const noteschema = mongoose.Schema({
    course:String,
    Author : String,
    
});
const notemodel = mongoose.model("note1",noteschema);
module.exports={
    notemodel
}