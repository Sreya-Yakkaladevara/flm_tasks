const express = require('express');
const { notemodel } = require('../schema/noteschema');
const noteRoute = express.Router();
noteRoute.post('/create',async (req,res)=>{
    
    try{
        const note = new notemodel(req.body);
        await note.save();
        res.send("note created ");
    }catch(error){
        res.send({msg:error.message});
    }

});
noteRoute.get('/',async (req,res)=>{
    try{
        const note = await notemodel.find();
        res.send("data fetched");
    }
    catch(error){
        res.send({msg:error.message});
    }
});
noteRoute.patch('/edit/:id',async (req,res)=>{
    const id = req.params;
    const payload = req.body;
    try{
        const note = await notemodel.findByIdAndUpdate({_id:id,payload});

        res.send("data edited");
    }
    catch(error){
        res.send({msg:error.message});
    }
});
noteRoute.delete('/delete/:id',async (req,res)=>{
    const id = req.params;
    // const payload = req.body;
    try{
        const note = await notemodel.findByIdAndUpdate({_id:id});
        
        res.send("data delete");
    }
    catch(error){
        res.send({msg:error.message});
    }
});
module.exports={
    noteRoute
}