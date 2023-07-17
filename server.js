const express = require("express");


const app = express();


const dbConfig = require('./db')
const farmersRoute = require('./routes/farmersRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json());


app.use('/api/farmers' , farmersRoute)
app.use('/api/users' , usersRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node server started using nodemon')); 