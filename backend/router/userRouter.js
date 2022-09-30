const express = require('express');
const router=express.Router();
const model=require('../Model/userModel');

router.post('/login',(req,res)=>{
    const formdata=req.body;
    console.log(formdata);
    model.findOne({email : formdata.email,password : formdata.password})
    .then((result)=>{
        if(result){
            res.status(200).json(result);
            console.log(result);
        }else{
            res.status(401).json({status:'login failed'});
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/register',(req,res)=>{
    console.log(req.body);
    new model(req.body).save()
    .then((result)=>{
        console.log("data save");
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err)
    })
})
module.exports = router;