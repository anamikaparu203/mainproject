// // routes/stationaryRoutes.js
// const express = require("express");
// const router = express.Router();
// const StationaryData = require("../model/stationary"); // Adjust the path as necessary

// // Create a new stationary entry
// router.post("/", async (req, res) => {
//     try {
//         const stationaryEntry = new StationaryData(req.body);
//         await stationaryEntry.save();
//         res.status(201).json(stationaryEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error creating stationary entry", error });
//     }
// });

// // Get all stationary entries
// router.get("/", async (req, res) => {
//     try {
//         const stationaries = await StationaryData.find();
//         res.status(200).json(stationaries);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching stationary entries", error });
//     }
// });

// // Get a specific stationary entry by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const stationaryEntry = await StationaryData.findById(req.params.id);
//         if (!stationaryEntry) {
//             return res.status(404).json({ message: "Stationary entry not found" });
//         }
//         res.status(200).json(stationaryEntry);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching stationary entry", error });
//     }
// });

// // Update a stationary entry by ID
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedStationaryEntry = await StationaryData.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedStationaryEntry) {
//             return res.status(404).json({ message: "Stationary entry not found" });
//         }
//         res.status(200).json(updatedStationaryEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error updating stationary entry", error });
//     }
// });

// // Delete a stationary entry by ID
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedStationaryEntry = await StationaryData.findByIdAndDelete(req.params.id);
//         if (!deletedStationaryEntry) {
//             return res.status(404).json({ message: "Stationary entry not found" });
//         }
//         res.status(200).json({ message: "Stationary entry deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting stationary entry", error });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const stationaryModel = require('../model/food'); // Ensure the correct model is imported

// GET Route to fetch all documents
router.get('/', async (req, res) => {     
    try {
        const data = await stationaryModel.find(); // Use emailModel here
        res.status(200).send(data);
    } catch (error) {
        console.error("GET Error:", error); // Optional: log the error for debugging
        res.status(404).send('Data not found');
    }
});

// POST Route to create a new document
router.post('/stationary', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new stationaryModel(item);
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




