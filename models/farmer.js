const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    location : {
        type : String , 
        required : true,
    },
    phoneNumber : {
        type : String , 
        required : true,
    },
    numberOfCows : {
        type : Number,
        required : true
    },
    dungProduced : {
        type : String,
        required : true
    },
    
    amountOfMilk : {
        type : String,
        required: true
    },
    imageUrls : [],
    description : {
        type: String , 
        required : true
    }

} , {
    timestamps : true,

})

const userModel = mongoose.model('farmers' , userSchema)

module.exports = userModel;