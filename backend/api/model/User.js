const mongoose = require("mongoose");
var conn = mongoose.Collection;
var userSchema = new mongoose.Schema({
    careTakerId : {
        type: Schema.Types.ObjectId, ref: 'careTaker'
    },
    role: {
        type: String,
    },
    name: {
        type:String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number
    }
},
{ timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;