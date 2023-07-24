const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const User = require("../models/user");

router.post("/registeruseradmin" , async(req, res) => {
    const newuser =new User({
        name : req.body.name ,
        email : req.body.email ,
        password : req.body.password
    });

    try{
        const user = await newuser.save();
        res.send('Admin Registered Successfully!')
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.post("/loginadmin", async(req, res) =>{
    const {email , password}= req.body
    try{
        const user = await User.findOne({email : email , password : password})
        if(user) {

            const temp = {
                name : user.name,
                email : user.email, //
                isAdmin : user.isAdmin,
                _id : user._id,
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


router.get("/getallusers", async(req,res) => {
    try{
        const users = await User.find({})
        res.send(users)
    } 
    catch(error) {
        return res.status(400).json({error});
    }
});
router.post('/registeruseradmin', adminController.registerAdmin);

module.exports = router;