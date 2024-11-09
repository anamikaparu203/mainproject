const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({ 
        patientName:String,        
        medicineName:String,   
        money:Number,           
        date:{ type: Date, default: Date.now }
});          
                        
const medicineData = mongoose.model('medicines', medicineSchema);  
module.exports = medicineData