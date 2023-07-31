const express = require("express");
const app = express();

const dbConfig = require('./db')
const farmersRoute = require('./routes/farmersRoute');
const usersRoute = require('./routes/usersRoute');
const adminRoute = require('./routes/adminRoute');
//const statisticsRoute = require('./routes/statistics');

app.use(express.json());


app.use('/api/farmers' , farmersRoute);
app.use('/api/users' , usersRoute);
app.use('/api/admins' , adminRoute);
//app.use(statisticsRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node server started using nodemon')); 