const mongoose=require('mongoose');
require('dotenv').config();
const url='mongodb+srv://sahniaditya951:aditya2004@cluster0.febxnpq.mongodb.net/';
mongoose.connect(url);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("database is connected")
})
db.on('disconnected',()=>{
    console.log("database is disconnected")
})
 
module.exports=db;

