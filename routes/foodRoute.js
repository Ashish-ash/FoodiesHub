const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');

router.get('/getFood' , async(req,res) =>{
    try {
        const data = await Food.find();
        res.send(data);
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post('/addFood', async(req,res)=>{
    try {
        const data = req.body
        const item = new Food({
            name : data.name,
            image: data.image,
            variants : ['small','medium', 'large'],
            description : data.description,
            category : data.category,
            prices : [data.prices],
        })
        await item.save()
        res.send('success');
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post("/getonefood" , async(req,res) =>{
    const itemid = req.body.itemid;
    try {
        const item = await Food.findOne({_id : itemid})
        res.send(item)
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post('/updateFood', async(req,res)=>{
    try {
        const data = req.body
        const previousItem = await Food.findOne({_id : data._id})
            previousItem.name = data.name,
            previousItem.image = data.image,
            previousItem.variants  = ['small','medium', 'large'],
            previousItem.description  = data.description,
            previousItem.category  = data.category,
            previousItem.prices  = [data.prices],
        await previousItem.save()
        res.send('success');
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.post('/deleteitem', async(req,res)=>{
    try {
        const itemid = req.body.itemid
        await Food.findOneAndDelete({_id : itemid})
        res.send('success');
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
module.exports = router;