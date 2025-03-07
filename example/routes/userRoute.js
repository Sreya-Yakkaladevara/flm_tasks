const express = require('express');
const UserRouter = express.Router();
const bcrypt = require('bcrypt')
const {usermodel } = require('../schema/userschema');
var jwt = require('jsonwebtoken');

UserRouter.post('/register',async(req,res)=>{
    try{

        const {email,password,age,name} = req.body;
        bcrypt.hash(password, 5, async function(err, hash) {
            const data = new usermodel({email,password:hash,name,age});
            await data.save();
            res.send("registered");
        });
    }
    catch(error){
        res.send({"msg":error.message});
        console.log(error);
    }
});
UserRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await usermodel.findOne({email:email});
        bcrypt.compare(password, user.password, function(err, result) {
            
            if(result){
                const token = jwt.sign(password, 'secrete');
                res.send({msg:"login successfull" ,token:token});

            }else{
                res.send({msg:"Wrong credentials" });
            }
        });
        // const token = jwt.sign(password, 'secrete');
        //         res.send({msg:"login successfull" ,token:token});
    }catch(error){
        res.send({msg:"error.message"});
    }
});

module.exports={
    UserRouter
}