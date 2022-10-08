const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    songName : String,
    dateRelease : Date,
    coverImg : String,

})

const SongModal = mongoose.model("song",songSchema);
module.exports =SongModal;