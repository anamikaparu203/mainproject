// // routes/dressRoutes.js
// const express = require("express");
// const router = express.Router();
// const DressData = require("../model/dress"); // Adjust the path as necessary

// // Create a new dress entry
// router.post("/", async (req, res) => {
//     try {

//         // const { girlsDress, boysDress, money } = req.body;

//         // // Validate request data
//         // if (typeof girlsDress !== 'number' || typeof boysDress !== 'number' || typeof money !== 'number') {
//         //     return res.status(400).json({ message: "Invalid input data. Ensure all fields are numbers." });
//         // }

//         const dressEntry = new DressData(req.body);
//         await dressEntry.save();
//         res.status(201).json(dressEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error creating dress entry", error });
//     }
// });

// // Get all dress entries
// router.get("/", async (req, res) => {
//     try {
//         const dress = await DressData.find();
//         res.status(200).json(dress);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching dress entries", error });
//     }
// });

// // Get a specific dress entry by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const dressEntry = await DressData.findById(req.params.id);
//         if (!dressEntry) {
//             return res.status(404).json({ message: "Dress entry not found" });
//         }
//         res.status(200).json(dressEntry);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching dress entry", error });
//     }
// });

// // Update a dress entry by ID
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedDressEntry = await DressData.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedDressEntry) {
//             return res.status(404).json({ message: "Dress entry not found" });
//         }
//         res.status(200).json(updatedDressEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error updating dress entry", error });
//     }
// });

// // Delete a dress entry by ID
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedDressEntry = await DressData.findByIdAndDelete(req.params.id);
//         if (!deletedDressEntry) {
//             return res.status(404).json({ message: "Dress entry not found" });
//         }
//         res.status(200).json({ message: "Dress entry deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting dress entry", error });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const dressModel = require('../model/dress'); // Ensure the correct model is imported

// GET Route to fetch all documents
router.get('/', async (req, res) => {     
    try {
        const data = await dressModel.find(); // Use emailModel here
        res.status(200).send(data);
    } catch (error) {
        console.error("GET Error:", error); // Optional: log the error for debugging
        res.status(404).send('Data not found');
    }
});

// POST Route to create a new document
router.post('/dress', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new dressModel(item);
        await data1.save();
        res.status(200).send("Post successful");
    } catch (error) {
        console.error("POST Error:", error); // Optional: log the error for debugging
        res.status(404).send("Post unsuccessful");
    }
});

router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await dressModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
    }
})

router.delete('/remove/:id',async (req, res) => {
    try {
        const id = req.params.id;
        await dressModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(500).send('Delete unsuccessful');
    }
});

module.exports = router;