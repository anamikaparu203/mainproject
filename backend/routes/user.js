const express = require("express");
const router = express.Router();
const User = require("../model/user");


router.post("/register", async (req, res) => {
    const { name, email, password } = req.body; 
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please provide all required fields" });
    }

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email is already in use." });
        }

        
        const newUser = new User({ name, email, password });
        await newUser.save();

    


        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;


