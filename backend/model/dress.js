// const mongoose = require("mongoose");

// const dressSchema = new mongoose.Schema({ 
    
//         girlsDress:Number,        
//         boysDress:Number,            
//         money:Number, 
              
// });           
                        
    
//     const dressData = mongoose.model('dress', dressSchema);  
//     module.exports = dressData;

const mongoose = require("mongoose");

const dressSchema = new mongoose.Schema({ 
    girlsDress: Number, // Added required field
    boysDress: Number,  // Added required field
    date:  { type: Date, default: Date.now },       // Default to current date if not specified
    money: Number
});           

const DressData = mongoose.model('dresses', dressSchema);  
module.exports = DressData;
