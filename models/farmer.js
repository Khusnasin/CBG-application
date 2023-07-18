const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    Name : {
        type : String,
        required : true
    },
    location : {
        type : String , 
        required : true
    },
    
    phoneNumber : {
        type : String , 
        required : true
    },
    areaOfNapier : {
        type : Number,
        required : true
    },
    useOfNapier : {
        type : String,
        required : true
    },
    numberOfCows : {
        type : Number,
        required : true
    },
    dungProduced_inKg : {
        type : String,
        required : true
    },
    
    amountOfMilk_inLitre : {
        type : String,
        required: true
    },
    imageUrls : [],
    description : {
        type: String , 
        required : true
    },
    challenges : {
        type : String,
        required : true
    },
    interestInTraining : {
        type : Boolean,
        default : false
    },
    password : {
        type : String,
        required : true
    }

} , {
    timestamps : true,

})

const userModel = mongoose.model('farmers' , userSchema)

module.exports = userModel;