const express = require('express');
const router = express.Router();

const Applicationform = require('../models/application')

//getting all
router.get('/', async (req,res) => {
   try{
    const applications = await Applicationform.find();
     res.json(applications)
   }catch(err){
    res.status(500).json({message: err.message})
   }
})
//getting one
router.get('/:id', getApplication, (req,res) => {
 res.send(res.application)
})
//creating one 
router.post('/', async (req,res) => {
    const application = new Applicationform({
       first_name: req.body.first_name,
       last_name:req.body.last_name,
       dob:req.body.dob,
       phone:req.body.phone,
       address:req.body.address,
       email:req.body.email,
       gender:req.body.gender

    });
    try{
    const newApplication = await application.save();
    res.status(201).json(newApplication)
    }catch(err){
       res.status(400).json({message:err.message})
    }
})
//updating one 
router.patch('/:id',getApplication, async (req,res) => {
    // req.params.id
    if (req.body.phone != null  ){
        res.application.phone = req.body.phone
    };
    if (req.body.email != null  ){
        res.application.email = req.body.email
    };
    try{
      const updateApplication = await res.application.save();
      res.json(updateApplication)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
//deleting one 
router.delete('/:id', getApplication, async (req,res) => {
 try{
   await res.application.deleteOne()
   res.json({message:'Deleted Applicationform successfully '})
 }catch(err){
    res.status(500).json({message:err.message})
 }
})



//middleware middleware middleware middleware middleware

async function getApplication (req,res,next){
    let application

    try {
        application = await Applicationform.findById(req.params.id)
        if (application == null ) {
           return res.status(404).json({message: 'can not find application form' })
        }
    } catch (err){
     return res.status(500).json({message:err.message})
    }
    res.application = application
    next()
};
module.exports = router