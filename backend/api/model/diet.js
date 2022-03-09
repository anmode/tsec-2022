const mongoose = require("mongoose");
var conn = mongoose.Collection;
var dietSchema = new mongoose.Schema({
    carTakerID : {
        type: mongoose.Schema.Types.ObjectId,         
        ref: 'careTaker'
    },
    food_diet: {
        type: String,
    },
    diet_date: {
        type: Date,
    },
   
},
{ timestamps: true }
);

var Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;