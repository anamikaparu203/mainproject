// models/Contribution.js
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    
        howManyPeople:Number,       
        quantity:Number,           
        foodName:String,                          
        date: { type: Date, default: Date.now }, 
        money:Number              
    });
    
    const foodData = mongoose.model('foods', foodSchema); 
    module.exports = foodData;
    





