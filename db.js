const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect(process.env.URL,{useUnifiedTopology:true,useNewUrlParser:true});

var db = mongoose.connection;
db.on('connected',()=>console.log('DataBase connected'));
db.on('error',()=>console.log('Not connected'));

module.export = mongoose;