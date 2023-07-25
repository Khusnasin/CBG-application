const express = require("express");
const router = express.Router();

const Farmer = require('../models/farmer');



router.post("/registerfarmer", async (req, res) => {
    const newfarmer = new Farmer({
        Name: req.body.Name,
        location: req.body.location,
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
        const newfarmer = new Farmer(req.body)
        await newfarmer.save()

        res.send("New Farmer Added Successfully!");
    } catch (error) {
        return res.status(400).json({ error });
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

        if(farmer){
            res.send(farmer);
        } else{
            res.status(404).json({ message: 'Farmer not found' });
        }
       
        //return res.json({rooms});
    }
    catch (error) {
        console.log('Error fetching farmer:', error);
        return res.status(400).json({ message: error });
    }
});

router.put('/updatefarmer/:farmerid', async (req, res) => {
    const farmerid = req.params.farmerid;
    const updateData = req.body;
  
    try {
      const farmer = await Farmer.findByIdAndUpdate(farmerid, updateData, { new: true });
  
      if (farmer) {
        res.send(farmer);
      } else {
        res.status(404).json({ message: 'Farmer not found' });
      }
    } catch (error) {
      console.log('Error updating farmer:', error);
      return res.status(400).json({ message: error });
    }
  });
  

router.post("/farmer-details", async (req, res) => {

    const { 
        farmer,
        userid,
        location,
        phoneNumber,
        areaOfNapier,
        useOfNapier,
        numberOfCows,
        dungProduced_inKg,
        amountOfMilk_inLitre,
        imageUrls,
        description,
        challenges,
        interestInTraining,
    } = req.body;
    //const userid = req.body.userid;

    //console.log(token);

    try {
        const newfarmerdetails = new Farmerdetail({
            farmer:farmer.Name,
            userid,
            location,
            phoneNumber,
            areaOfNapier,
            useOfNapier,
            numberOfCows,
            dungProduced_inKg,
            amountOfMilk_inLitre,
            imageUrls,
            description,
            challenges,
            interestInTraining
        })

        const updates = await newfarmerdetails.save();
        const farmertemp = await Farmer.findOne({ _id: farmer._id })
        //console.log(roomtemp);

        farmertemp.currentDetails.push({
            updateid : updates._id,
            userid: userid
        });

        await farmertemp.save();


        res.send('Payment Successful! Your room in successfully booked');
    } catch (error) {
        console.log('Khushnasin')
        return res.status(400).json({ error });
        //console.log(error);
    }

});


module.exports = router;  