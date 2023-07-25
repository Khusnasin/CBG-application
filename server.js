const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dbConfig = require('./db')
const farmersRoute = require('./routes/farmersRoute')
const usersRoute = require('./routes/usersRoute')
const adminRoute = require('./routes/adminRoute')

app.use(express.json());

app.use(bodyParser.json());
app.use('/api/farmers' , farmersRoute)
app.use('/api/users' , usersRoute)
app.use('/api/admin' , adminRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node server started using nodemon')); 