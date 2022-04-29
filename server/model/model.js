const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    number : {
        type : String,
        required: true,
        unique: true
    },
    model : {
        type: String,
        required: true,
        
    },
     type : {
        type: String,
        required: true,
        
    },
    phone : String,
    check : String,
    customer :String,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;