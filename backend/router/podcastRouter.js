const express=require('express');
const router=express.Router();
// const model=require('../Model/podcastModel')
const podcastModel=require('../Model/podcastModel.js');
router.post('/add',(req,res)=>{
    console.log(req.body);
    new podcastModel(req.body).save()
    .then((result)=>{
        console.log("data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})

router.get('/getall',(req,res)=>{
    podcastModel.find().populate('createdBy')
    .then((result)=>{
        console.log(result);
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    });
})

router.get('/getbyid/:id',(req,res)=>{
    podcastModel.findById(req.params.id).populate('createdBy')
    .then((result)=>{
        console.log(result);
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    });
})
module.exports = router;