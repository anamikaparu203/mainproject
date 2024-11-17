 const mongoose = require("mongoose");

const dressSchema = new mongoose.Schema({ 
    girlsDress: Number, 
    boysDress: Number,  
    date:  { type: Date, default: Date.now },       
    money: Number
});           

const DressData = mongoose.model('dresses', dressSchema);  
module.exports = DressData;
