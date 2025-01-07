const express = require('express');
const  mongoose = require('mongoose');
const { userRoute } = require('./routes/userRoute');
const { employeeRoute } = require('./routes/EmployeeRoute');
require('dotenv').config()
const app = express();
app.use(express.json());
app.use("/user",userRoute);
app.use("/employee",employeeRoute)
app.listen("3040",(req,res)=>{
    mongoose.connect(process.env.Mongourl)
    console.log("severe started");
})