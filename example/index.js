const express = require('express');
const {connection} = require('./connection/connection');
const { UserRouter } = require('./routes/userRoute');
const { Auth } = require('./connection/Auth');
const { noteRoute } = require('./routes/noteRoute');

const app = express();
app.use(express.json());
app.use("/user",UserRouter);
app.use(Auth);
app.use("/note",noteRoute)

app.listen(2030,async()=>{
    await connection;
    console.log("sever started ")

})