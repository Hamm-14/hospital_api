const mongoose = require('mongoose');

const patientReportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine','Positive-Admit'],
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    timestamps: true
});

const PatientReport = mongoose.model('PatientReport',patientReportSchema);

module.exports = PatientReport;