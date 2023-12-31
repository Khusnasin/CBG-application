const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/login", async(req, res) =>{
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
        // Handling null values in the response data
    const usersWithNullFields = users.map(user => ({
        ...user.toObject(),
        name: user.name || null,
        email: user.email || null,
        password: user.password || null,
      }));
        res.send(usersWithNullFields)
    } 
    catch(error) {
        return res.status(400).json({error});
    }
});


module.exports = router;