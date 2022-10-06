const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    songName : String,
    dateRelease : Number,
    coverImg : Array,

})

const SongModal = mongoose.model("user",songSchema);
module.exports =SongModal;