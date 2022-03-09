const mongoose = require("mongoose");
var conn = mongoose.Collection;
var appointmentSchema = new mongoose.Schema({
    careTakerId : {
        type: mongoose.Schema.Types.ObjectId, ref: 'careTaker'
    },
    name:{
        type:String,
    },
    specialization: {
        type:String,
    },
    hospitalName: {
        type:String,
    },
    location: {
        type:String
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
    }
},
{ timestamps: true }
);

var appointment=mongoose.model('appointment', appointmentSchema);
module.exports=appointment;