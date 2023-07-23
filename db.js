const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://bluecorecbgplant:wHlcuIsJUk58IUEF%402019@cluster0.p1z9ijo.mongodb.net/Bluecore'

mongoose.connect(mongoURL , {
    useUnifiedTopology: true ,
     useNewUrlParser : true,
     useCreateIndex: true
    })

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MongoDB Connection failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB connection successful!')
})



module.exports = mongoose