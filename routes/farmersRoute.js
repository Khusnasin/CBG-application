const express = require("express");
const router = express.Router();

const Farmer = require('../models/farmer');

router.get('/getallfarmers', async(req, res) => {

    try{
        const farmers = await Farmer.find({})
        res.send(farmers);
        //return res.json({rooms});
    }
    catch(error){
        return res.status(400).json({message : error}); 
    }

});

router.post("/registerfarmer", async(req,res) => {
    try{
        const newfarmer = new Farmer(req.body)
        await newfarmer.save()

        res.send("Farmer Registered successfully");
    } catch(error){
        return res.status(400).json({error});
    }
});

module.exports = router; 