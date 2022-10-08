const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artistName : String,
    DOB : Date,
    bio : String,
})

const ArtistModal = mongoose.model("artist",artistSchema);
module.exports = ArtistModal;