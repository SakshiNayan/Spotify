const express = require("express")
const router = express.Router(); 
const ArtistModal = require('../Models/artist-model')


router.post('/addArtist',(req,res)=>{
    ArtistModal.create({
        artistName: req.body.artistName,
        DOB : req.body.DOB,
        bio : req.body.bio
    }).then(()=>{
        res.status(200).send(`${req.body.artistName} added successfully`)
    }).catch((err)=>{
        res.status(400).send(err.message)
    })
    
});

router.get("/fetchArtist",(req,res)=>{
    ArtistModal.find().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err,"data not find")
    })
})

module.exports=router;