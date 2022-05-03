const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name : {type : String, require : true},
    email : {type : String, require : true},
    userid :{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    orderItems : [],
    shippingAddress : {type : Object},
    orderAmount : {type : Number , require : true},
    isDelivered : {type : Boolean , require : true , default : false},
    transactionId : {type: String , require : true}
} , {
    timestamps : true,
})
module.exports = mongoose.model('orders',orderSchema)