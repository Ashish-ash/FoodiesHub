const express = require('express');
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const Order = require('../models/orderModel');
const stripe = require('stripe')('sk_test_51KebMjSIjG2OPNA7B7KficQbAbNtVl8qgKWwzjLp39pl67mgah3HHCxf2Y9ZZzshL1V4GVeO5GUyIkXEY3EMYV7300oHOuH6NS');
router.post('/placeorder', async (req,res)   =>{
    const {token , SubTotal , currentUser , cartItems} = req.body
    try {
        const idempotencyKey = uuidv4();
        const neworder = new Order({
            name : currentUser.name,
            email : currentUser.email,
            userid : currentUser._id,
            orderItems : cartItems,
            orderAmount : SubTotal,
            shippingAddress : {
                street : token.card.address_line1,
                city : token.card.address_city,
                country : token.card.address_country,
                pincode : token.card.address_zip,
            },
            transactionId : idempotencyKey, 
        })
        neworder.save()
        res.send('Order Placed Successfully');
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:error});
    }
});
router.post("/getuserorders" , async (req,res)=>{
    const {userid} = req.body;
    try {
      const orders = await Order.find({userid : userid}).sort({_id : -1}) 
      res.send(orders) 
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.get("/getallorders" , async (req,res)=>{
    try {
        const orders = await Order.find({});
        res.send(orders);
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post("/deliverorder" , async (req,res)=>{
    const orderid = req.body.orderid;
    try {
        const order = await Order.findOne({_id : orderid});
        console.log(order)
        order.isDelivered = true;
        await order.save();
        res.send("Success");
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
module.exports = router