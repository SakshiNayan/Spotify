const express = require("express");
const bcrypt = require("bcryptjs")
const UserModal = require("../Models/user-model")
const jwt=require("jsonwebtoken")
const router = express.Router(); 
const {checkUserExist, generatePassHash}= require("../utility")

router.post("/register", async(req,res)=>{
    if(await checkUserExist(req.body.userName)){
        res.status(400).send("User already exist")
    }
    else{
        generatePassHash(req.body.password).then((passHash)=>{
            UserModal.create({
                userName : req.body.userName,
                password : passHash
            })
        }).then(()=>{
            res.status(200).send(`${req.body.userName} successfylly added`)
        }).catch((err)=>{
            res.status(400).send(err.message)
        })
    }
    
})

router.post("/login",(req,res)=>{
    UserModal.find({userName: req.body.userName}).then((data)=>{
        if(data.length){
            bcrypt.compare(req.body.password, data[0].password).then((val)=>{
                if(val){
                    const authToken = jwt.sign(data[0].userName, process.env.SECRET_KEY);
                    res.status(200).send({"status": "successfully login", authToken, userName: data[0].userName})
                }
                else{
                    res.status(400).send("invalid password")
                }
            })
        }
        else{
            res.status(400).send("invalid user")
        }
    })
});
 
router.get("/detailUser",(req,res)=>{
    try {
        const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        UserModal.find({userName : user}).then((data)=>{
          //console.log(data)
          res.status(200).send({user: data});
        }).catch((err)=>{
          res.status(400).send(err);
        })
    } catch(err) {
        res.status(400).send("Unauthorize user", err)
    }  
})

module.exports=router;
