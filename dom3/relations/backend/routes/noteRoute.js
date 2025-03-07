const express = require('express');
const { notemodel } = require('../model/notemodel');
const noteRoute = express.Router();
noteRoute.post("/create",async(req,res)=>{
    try{
        const note = new notemodel(req.body);
        console.log(note)
        await note.save();
        res.status(200).send("data created")
    }catch(err){
        res.send("error",err)
    }
});
noteRoute.get("/",async(req,res)=>{
    try{
        const note = await notemodel.find({AuthorID:req.body.AuthorID});
        // const note = await notemodel.find();
        res.status(200).send({msg:"data fetched",data:note})
    }catch(err){
        res.send("error",err)
    }
});
noteRoute.patch("/edit/:Id",async(req,res)=>{
    const id = req.params.Id
    const payload = req.body;
    const note = await notemodel.findOne({_id:id});

    const userID = req.body.AuthorID;
    try{
        if(userID !== note.AuthorID){
            res.send("you`re not authorized")
        }
        else{

            await notemodel.findByIdAndUpdate({_id:id},payload);
             res.status(200).send({msg:"data edited"});
        }
    }catch(err){
        res.send("error",err)
    }
});
noteRoute.delete("/delete/:Id",async(req,res)=>{
    const id = req.params.Id
    const payload = req.body;
    try{
        const note = await notemodel.findByIdAndDelete({_id:id});
        res.status(200).send({msg:"data deleted"})
    }catch(err){
        res.send("error",err)
    }
});
module.exports={
    noteRoute
}