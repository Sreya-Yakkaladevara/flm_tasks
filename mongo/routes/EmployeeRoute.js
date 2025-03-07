const express = require('express');
const { employeemodel } = require('../model/employeeschema');
const employeeRoute = express.Router();

employeeRoute.post("/create",async(req,res)=>{
    try{
        const data = new employeemodel(req.body);
        await data.save();
        res.send("Data is created");
    }
    catch(err){
        res.send(err)
    }
})
// get
employeeRoute.get("/",async(req,res)=>{
    try{
        const data = await employeemodel.find();
        res.send(data);
    }
    catch(error){
        res.send(error)
    }
})
employeeRoute.patch("/edit/:empId",async(req,res)=>{
    const empId = req.params.empId
    const payload = req.body
    try{
        const data = await employeemodel.findByIdAndUpdate({_id:empId},payload);
        res.send(" Data is updated");
    }
    catch(error){
        res.send(error)
    }
});
employeeRoute.delete("/delete/:empId",async(req,res)=>{
    const empId = req.params.empId;
    try{
        const data = await employeemodel.findByIdAndDelete({_id:empId});
        res.send(" Data is deleted");
    }
    catch(error){
        res.send(error)
    }
});
module.exports={
    employeeRoute
}