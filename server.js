const express = require('express');
const db = require('./db');
const app = express();
const dotenv = require('dotenv')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "origin, Content-Type, Authorization, Accept"
    );
  
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
app.use(express.json());
const foodRoutes = require('./routes/foodRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');
app.get('/',(req,res)=>{
    res.send('server working');
});
app.use('',foodRoutes);
app.use('/users',userRoute);
app.use('/orders',ordersRoute);
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('server'));