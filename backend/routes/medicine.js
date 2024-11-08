
// routes/medicineRoutes.js
// const express = require("express");
// const router = express.Router();
// const MedicineData = require("../model/food"); // Adjust the path as necessary

// // Create a new medicine entry
// router.post("/", async (req, res) => {
//     try {
//         const medicineEntry = new MedicineData(req.body);
//         await medicineEntry.save();
//         res.status(201).json(medicineEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error creating medicine entry", error });
//     }
// });

// // Get all medicine entries
// router.get("/", async (req, res) => {
//     try {
//         const medicines = await MedicineData.find();
//         res.status(200).json(medicines);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching medicine entries", error });
//     }
// });

// // Get a specific medicine entry by ID
// router.get("/:id", async (req, res) => {
//     try {
//         const medicineEntry = await MedicineData.findById(req.params.id);
//         if (!medicineEntry) {
//             return res.status(404).json({ message: "Medicine entry not found" });
//         }
//         res.status(200).json(medicineEntry);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching medicine entry", error });
//     }
// });

// // Update a medicine entry by ID
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedMedicineEntry = await MedicineData.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedMedicineEntry) {
//             return res.status(404).json({ message: "Medicine entry not found" });
//         }
//         res.status(200).json(updatedMedicineEntry);
//     } catch (error) {
//         res.status(400).json({ message: "Error updating medicine entry", error });
//     }
// });

// // Delete a medicine entry by ID
// router.delete("/:id", async (req, res) => {
//     try {
//         const deletedMedicineEntry = await MedicineData.findByIdAndDelete(req.params.id);
//         if (!deletedMedicineEntry) {
//             return res.status(404).json({ message: "Medicine entry not found" });
//         }
//         res.status(200).json({ message: "Medicine entry deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting medicine entry", error });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const medicineModel = require('../model/medicine'); // Ensure the correct model is imported

// GET Route to fetch all documents
router.get('/', async (req, res) => {     
    try {
        const data = await medicineModel.find(); // Use emailModel here
        res.status(200).send(data);
    } catch (error) {
        console.error("GET Error:", error); // Optional: log the error for debugging
        res.status(404).send('Data not found');
    }
});

// POST Route to create a new document
router.post('/medicine', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new medicineModel(item);
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
        const data=await medicineModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
    }
})

router.delete('/remove/:id',async (req, res) => {
    try {
        const id = req.params.id;
        await medicineModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(500).send('Delete unsuccessful');
    }
});

module.exports = router;




