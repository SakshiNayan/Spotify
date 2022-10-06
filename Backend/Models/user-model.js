const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : String,
    email : String,
})

const UserModal = mongoose.model("user",userSchema);
module.exports =UserModal;