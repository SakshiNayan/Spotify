const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    songName : String,
    dateRelease : Number,
    coverImg : Array,

})

const UserModal = mongoose.model("user",userSchema);
module.exports =UserModal;