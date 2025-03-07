const express = require('express');
const { usermodel } = require('../model/usermodel');
const userRoute  = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRoute.post('/register',async(req,res)=>{
    const {email,name,age,password} = req.body;
    try{
        bcrypt.hash(password, 5,async function(err, hash) {
            const data = new usermodel({email,name,age,password:hash});
            await data.save();
            console.log(data);
    });
    res.send("data created");
        
    }
    catch(error){
        res.send({error:error.message});
    }
});
userRoute.post('/login',async(req,res)=>{
    const {email,password} =req.body;
    try{
        const data = await usermodel.findOne({email:email});
        bcrypt.compare(password, data.password,function(err,result) {
            if(result){
                const token = jwt.sign({AuthorID:data.id,Author:data.name}, 'secrete');
                res.send({"msg":"login success",token:token});
            }else{
                res.send("wrong Credentails");

            }
           
        }); 
    }
    catch(error){
        res.send({error:error.message});
    }
});


module.exports = {
    userRoute
}
