const mongoose = require('mongoose');
const noteschema = mongoose.Schema({
    course : String,
    Author : String,
    AuthorID : {type:String,required:true}

},{
    versionKey: false
});
const notemodel = mongoose.model("note",noteschema);
module.exports={
    notemodel
}