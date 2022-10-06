const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artistName : String,
    DOB : Number,
    bio : String,
})

const ArtistModal = mongoose.model("user",artistSchema);
module.exports = ArtistModal;