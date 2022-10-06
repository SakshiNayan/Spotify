const express = require("express");
const mongoose = require("mongoose");


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb://localhost/spotify",(data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});
app.listen(3001, (err)=>{
    if(!err){
        console.log("server is running at 3001")
    }
    else{
        console.log(err)
    }
})

app.get("/",function(req,res){
    res.send("Spotify Page")
})