const mongoose = require('mongoose');

const schema =  new mongoose.Schema({
    name : {type : String , require : true},
    variants: [],
    prices : [],
    category : {type : String, require:true},
    image : {type : String, require},
    description : {type : String, require}
},{
    timestamps : true,
})

const foodModel = mongoose.model('Food',schema);
module.exports = foodModel; 