const mongoose = require("mongoose");
var conn = mongoose.Collection;
var MedicineSchema = new mongoose.Schema({
    careTakerID : {
        type: mongoose.Schema.Types.ObjectId,         
         ref: 'careTaker'
    },
    medicineName: {
        type: String,
    },
    medicineTime: {
        type:String,
    },
    dose: {
        type: String,
    },
    img:{
        type:String
    }
},
{ timestamps: true }
);

var Medicine = mongoose.model('Medicine', MedicineSchema);
module.exports = Medicine;