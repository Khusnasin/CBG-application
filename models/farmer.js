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
    latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
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
        required : false
    },
    numberOfCows : {
        type : Number,
        required : true
    },
    dungProduced_inKg : {
        type : Number,
        required : true
    },
    
    amountOfMilk_inLitre : {
        type : Number,
        required: true
    },
    
    imageUrls : [],
    
    description : {
        type: String , 
        required : false
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
        required : false
    } 

} , {
    timestamps : true,

})

const userModel = mongoose.model('farmers' , userSchema)

module.exports = userModel;