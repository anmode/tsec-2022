const mongoose = require("mongoose");
var conn = mongoose.Collection;
var careTakerSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type:String,
    },
    contact: {
        type:String,
    },
    password: {
        type:String
    }
},
{ timestamps: true }
);

var careTaker=mongoose.model('careTaker', careTakerSchema);
module.exports=careTaker;