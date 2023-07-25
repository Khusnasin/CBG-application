const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://bluecorecbgplant:wHlcuIsJUk58IUEF%402019@cluster0.p1z9ijo.mongodb.net/Bluecore'

mongoose.connect(mongoURL , {
    useUnifiedTopology: true ,
<<<<<<< HEAD
     useNewUrlParser : true,
     //useCreateIndex: true
=======
    useNewUrlParser: true,
>>>>>>> 77496a09707c3a5653fad58f8a13d2e5864d3be9
    })

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('MongoDB Connection failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB connection successful!')
})



module.exports = mongoose;