const express = require('express');
const app = express();
const { connection } = require('./config/db');
const { userRoute } = require('./routes/userRoute');
const { Auth } = require('./Authentication/Auth');
const { noteRoute } = require('./routes/noteRoute');
const cors = require('cors')
app.use(cors('*'));
app.use(express.json());

app.use('/',userRoute);
app.use(Auth);
app.use("/note",noteRoute)
app.listen("3929",async(req,res)=>{
    try{
        await connection
        console.log("server started");
    }
    catch(error){
        console.log({error:error.message});
    }
})