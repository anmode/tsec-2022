const mongoose = require("mongoose");
var conn = mongoose.Collection;
var MedicineSchema = new mongoose.Schema({
    id : {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    medicineName: {
        type: String,
    },
    medicineTime: {
        type:String,
    },
    dose: {
        type: Number,
    }
},
{ timestamps: true }
);

var Medicine = mongoose.model('Medicine', MedicineSchema);
module.exports = Medicine;