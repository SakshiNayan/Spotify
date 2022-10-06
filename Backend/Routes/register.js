const express = require("express");
const UserModal = require("../Models/user-model")

const router = express.Router(); 

router.post("/resgister", (req,res)=>{
    UserModal.create({
        userName : req.body.userName,
        email : req.body.email
    })
})
