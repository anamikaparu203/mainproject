const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({ 
    
        patientName:String,        
        MedicineName:String,            
        money:Number,  
        date:Date
});           
                        
const medicineData = mongoose.model('medicines', medicineSchema);  
module.exports = medicineData