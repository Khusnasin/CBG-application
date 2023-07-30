const express = require("express");
const router = express.Router();

const Farmer = require('../models/farmer');
router.post("/registerfarmer", async (req, res) => {
    const newfarmer = new Farmer({
        Name: req.body.Name,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        phoneNumber: req.body.phoneNumber,
        areaOfNapier: req.body.areaOfNapier,
        useOfNapier: req.body.useOfNapier,
        numberOfCows: req.body.numberOfCows,
        dungProduced_inKg: req.body.dungProduced_inKg,
        amountOfMilk_inLitre: req.body.amountOfMilk_inLitre,
        imageurl1: req.body.imageurl1,
        imageurl2: req.body.imageurl2,
        imageurl3: req.body.imageurl3,
        description: req.body.description,
        challenges: req.body.challenges,
        interestInTraining: req.body.interestInTraining,
        password: req.body.password,

    })
    try {
        const farmer = await newfarmer.save();
        res.send("Farmer Registered successfully");
    } catch (error) {
        return res.status(400).json({ error });
    }
});
router.post("/loginfarmer", async (req, res) => {
    const { Name, password } = req.body
    try {
        const farmer = await Farmer.findOne({ Name: Name, password: password })
        if (farmer) {

            const temp = {
                Name: farmer.Name,
                location: farmer.location,
                phoneNumber: farmer.phoneNumber,
                _id: farmer._id,
            }
            res.send(temp);
        } else {
            return res.status(400).json({ message: 'Login failed' });
        }
    }
    catch (error) {
        return res.status(400).json({ error });
    }
});


router.post("/addfarmers", async (req, res) => {
    try {
        const {
            Name,
            location,
            phoneNumber,
            areaOfNapier,
            useOfNapier,
            numberOfCows,
            dungProduced_inKg,
            amountOfMilk_inLitre,
            imageurl1,
            imageurl2,
            imageurl3,
            description,
            challenges,
            interestInTraining,
            password,
        } = req.body;

        const newfarmer = new Farmer({
            Name,
            location,
            phoneNumber,
            areaOfNapier,
            useOfNapier,
            numberOfCows,
            dungProduced_inKg,
            amountOfMilk_inLitre,
            imageurl1,
            imageurl2,
            imageurl3,
            description,
            challenges,
            interestInTraining,
            password,
        });

        await newfarmer.save();

        res.status(200).json({ message: "New Farmer Added Successfully!" });
    } catch (error) {
        console.error('Error adding farmer:', error);
        res.status(500).json({ error: 'Failed to add farmer. Please try again later.' });


    }
});

router.get('/getallfarmers', async (req, res) => {

    try {
        const farmers = await Farmer.find({})
        res.send(farmers);
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.get('/getfarmerbyid', async (req, res) => {
    const farmerid = req.query.farmerid;
    console.log('Fetching farmer with ID:', farmerid);
    try {
        const farmer = await Farmer.findOne({ _id: farmerid });

        if (farmer) {
            res.send(farmer);
        } else {
            res.status(404).json({ message: error });
        }

        //return res.json({rooms});
    }
    catch (error) {
        console.log('Error fetching farmer:', error);
        return res.status(400).json({ message: error });
    }
});

router.put('/updatefarmer/:farmerid', async (req, res) => {
    const farmerId = req.params.farmerid;
    const updatedFarmerData = req.body;

    try {

        const updatedFarmer = await Farmer.findByIdAndUpdate(farmerId, updatedFarmerData, { new: true });


        res.json(updatedFarmer);
    } catch (error) {
        console.log('Error updating farmer:', error);
        return res.status(400).json({ message: 'Failed to update farmer' });
    }
});



module.exports = router;  