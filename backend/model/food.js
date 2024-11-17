const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
    
        howManyPeople:Number,       
        foodName:String,                          
        date: { type: Date, default: Date.now }, 
        amount:Number              
    });
 const foodData = mongoose.model('foods', foodSchema); 
 module.exports = foodData;
    





