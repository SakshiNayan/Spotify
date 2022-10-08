const express = require("express")
const router = express.Router(); 
const SongModal = require('../Models/song-model')


router.post('/addSong',(req,res)=>{
    console.log(req.body)
    SongModal.create({
        songName: req.body.songName,
        dateRelease : req.body.dateRelease,
        coverImg : req.body.coverImg
    }).then((post)=>{
        res.status(200).send(post)
    }).catch((err)=>{
        res.status(400).send(err.message)
    })
    
});

router.get("/fetchSong",(req,res)=>{
    SongModal.find().then((data)=>{
        res.status(200).send({coverImg:data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;