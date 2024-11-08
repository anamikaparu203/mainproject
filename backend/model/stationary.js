const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema({ 
    
        books:Number,        
        bags:Number,            
        penPencil:Number,            
        date:{ type: Date, default: Date.now },    
        money:Number   
});           
                        
    
    const stationaryData = mongoose.model('stationarys', stationarySchema);  
    module.exports = stationaryData