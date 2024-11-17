const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const stationaryModel = require('../model/food'); 


router.get('/', async (req, res) => {     
    try {
        const data = await stationaryModel.find(); 
        res.status(200).send(data);
    } catch (error) {
        console.error("GET Error:", error); 
        res.status(404).send('Data not found');
    }
});


router.post('/stationary', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new stationaryModel(item);
        await data1.save();
        res.status(200).send("Post successful");
    } catch (error) {
        console.error("POST Error:", error); 
        res.status(404).send("Post unsuccessful");
    }
});

router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await stationaryModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
    }
})

router.delete('/remove/:id',async (req, res) => {
    try {
        const id = req.params.id;
        await stationaryModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(500).send('Delete unsuccessful');
    }
});

module.exports = router;




