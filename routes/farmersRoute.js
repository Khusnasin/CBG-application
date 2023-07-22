const express = require("express");
const router = express.Router();

const Farmer = require('../models/farmer');

router.get('/getallfarmers', async(req, res) => {

    try{
        const farmers = await Farmer.find({})
        res.send(farmers);
        
    }
    catch(error){
        console.error('Error fetching all farmers:', error);
        return res.status(400).json({message : error}); 
    }

});

router.post("/registerfarmer", async(req,res) => {
    const newfarmer = new Farmer({
                Name : req.body.Name,
                location: req.body.location,
                phoneNumber: req.body.phoneNumber,
                areaOfNapier: req.body.areaOfNapier,
                useOfNapier: req.body.useOfNapier,
                
                numberOfCows: req.body.numberOfCows,
                dungProduced_inKg: req.body.dungProduced_inKg,
                amountOfMilk_inLitre: req.body.amountOfMilk_inLitre,
                imageurl1: req.body.imageurl1,
                imageurl2: req.body.imageurl2,
                imageurl3 : req.body.imageurl3,
                description : req.body.description,
                challenges: req.body.challenges,
                interestInTraining: req.body.interestInTraining,
                password: req.body.password,
                
    })
    try{
        const farmer = await newfarmer.save();

        
        res.send("Farmer Registered successfully");
    } catch(error){
        return res.status(400).json({error});
    }
});
router.post("/loginfarmer", async(req, res) =>{
    const {Name , password}= req.body
    try{
        const farmer = await Farmer.findOne({Name : Name , password : password})
        if(farmer) {

            const temp = {
                Name : farmer.Name,
                location : farmer.location,
                phoneNumber : farmer.phoneNumber,
                _id : farmer._id,
            }
            res.send(temp);
        }else{
            return res.status(400).json({message : 'Login failed'});
        }
        
        
    }
    catch(error){
        return res.status(400).json({ error});
    }
});

router.post("/addfarmers", async(req,res) => {
    try{
        const newfarmer = new Farmer(req.body)
        await newfarmer.save()

        res.send("New Farmer Added Successfully!");
    } catch(error){
        return res.status(400).json({error});
    }
});

module.exports = router; 