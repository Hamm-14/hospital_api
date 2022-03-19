const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({         //using mongoose for creating schema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);       //model the schema

module.exports = Doctor;



