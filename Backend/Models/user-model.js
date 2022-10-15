const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : String,
    password: String,
    email: String,
    DOB: Number,
    userType: String,
})

const UserModal = mongoose.model("user",userSchema);
module.exports =UserModal;