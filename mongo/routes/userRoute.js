const express = require('express');
const userRoute = express.Router();
const { userModel } = require('../model/userschema');

//post
userRoute.post('/create',async(req,res)=>{
    try{
    const data = new userModel(req.body);
    await data.save();
    res.send("data has been posted");
    
}
catch(error){
    console.log(error)
}
})
    

// get
userRoute.get('/',async(req,res)=>{
    const data = await userModel.find();
    // console.log(data)
    // res.send("data is fetched from db ")
    res.send(data)
})

// patch
userRoute.patch('/edit/:userId',async(req,res)=>{
    const userId = req.params.userId;
    const payload = req.body;
    try{
        const data = await userModel.findByIdAndUpdate({_id:userId},payload);
    console.log(data)
    // res.send("data is fetched from db ")
    res.send("data updated")
    }
    catch(err){
        console.log(err)
    }
    
})

// delete
userRoute.delete('/delete/:userId',async(req,res)=>{
    const userId = req.params.userId;
    // const payload = req.body;
    try{
        const data = await userModel.findByIdAndDelete({_id:userId});
    console.log(data)
    // res.send("data is fetched from db ")
    res.send("data deleted")
    }
    catch(err){
        console.log(err)
    }
    
})

module.exports={
    userRoute
}