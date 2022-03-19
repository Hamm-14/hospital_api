const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PatientReport'
        }
    ]
},{
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;



