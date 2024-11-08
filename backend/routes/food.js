// const express = require("express");
// const router = express.Router();
// const foodData = require("../model/food"); // Adjust the path if needed

// Create a new food sponsorship entry
// router.post("/add", async (req, res) => {
//     const { howManyPeople, quantity, foodName, date, money } = req.body;

//     try {
//         const newFoodEntry = new Food({
//             howManyPeople,
//             quantity,
//             foodName,
//             date,
//             money
//         });
        
//         await newFoodEntry.save();
//         res.status(201).json({ message: "Food sponsorship entry created successfully", data: newFoodEntry });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating food sponsorship entry", error });
//     }
// });

// // Get all food sponsorship entries
// router.get("/", async (req, res) => {
//     try {
//         const foodEntries = await foodData.find();
//         res.status(200).json(foodEntries);
//     } catch (error) {
//         res.status(500).json({ message: "Error retrieving food sponsorship entries", error });
//     }
// });

// // Get a specific food sponsorship entry by ID
// router.get("/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const foodEntry = await foodData.findById(id);
//         if (!foodEntry) {
//             return res.status(404).json({ message: "Food sponsorship entry not found" });
//         }
//         res.status(200).json(foodEntry);
//     } catch (error) {
//         res.status(500).json({ message: "Error retrieving the food sponsorship entry", error });
//     }
// });

// // Update a specific food sponsorship entry by ID
// router.put("/update/:id", async (req, res) => {
//     const { id } = req.params;
//     const { howManyPeople, quantity, foodName, date, money } = req.body;

//     try {
//         const updatedFoodEntry = await foodData.findByIdAndUpdate(
//             id,
//             { howManyPeople, quantity, foodName, date, money },
//             { new: true }
//         );
        
//         if (!updatedFoodEntry) {
//             return res.status(404).json({ message: "Food sponsorship entry not found" });
//         }
        
//         res.status(200).json({ message: "Food sponsorship entry updated successfully", data: updatedFoodEntry });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating food sponsorship entry", error });
//     }
// });

// // Delete a specific food sponsorship entry by ID
// router.delete("/delete/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedFoodEntry = await foodData.findByIdAndDelete(id);
        
//         if (!deletedFoodEntry) {
//             return res.status(404).json({ message: "Food sponsorship entry not found" });
//         }
        
//         res.status(200).json({ message: "Food sponsorship entry deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting food sponsorship entry", error });
//     }
// });

const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const foodModel = require('../model/food'); // Ensure the correct model is imported

// GET Route to fetch all documents
router.get('/', async (req, res) => {     
    try {
        const data = await foodModel.find(); // Use emailModel here
        res.status(200).send(data);
    } catch (error) {
        console.error("GET Error:", error); // Optional: log the error for debugging
        res.status(404).send('Data not found');
    }
});

// POST Route to create a new document
router.post('/food', async (req, res) => {
    try {
        const item = req.body;
        const data1 = new foodModel(item);
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
        const data=await foodModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
    }
})

router.delete('/remove/:id',async (req, res) => {
    try {
        const id = req.params.id;
        await foodModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(500).send('Delete unsuccessful');
    }
});

module.exports = router;




