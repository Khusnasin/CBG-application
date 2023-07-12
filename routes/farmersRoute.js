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

module.exports = router; 