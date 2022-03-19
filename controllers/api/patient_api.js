const Patient = require('../../models/patient');
const PatientReport = require('../../models/patientReport');

//controller for registering the patient in db
module.exports.register = async function(req,res){
    
    try{
        let patient = await Patient.findOne({phone: req.body.phone}).populate('reports');
        //if patient already exist
        if(patient){
            return res.status(200).json({
                message: 'Patient already registered',
                data: {
                    patient: patient
                }
            });
        }
        if(req.body.name && req.body.phone){
            await Patient.create({name: req.body.name, phone:req.body.phone});
            
            return res.status(200).json({
                message: 'Patient Registered Successfully'
            });
        }
        return res.status(422).json({
            message: 'name and password is mandatory'
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

//create report for patient
module.exports.createReport = async function(req,res){
    try{
        if(req.body.status){
            let patient = await Patient.findById(req.params.id); 
            if(!patient){
                return res.status(422).json({
                    message: 'Patient not found'
                });
            }
            let report = await PatientReport.create({doctor: req.user._id, status: req.body.status, patient: patient._id });  //creating report
            patient.reports.push(report._id);          //pushing the report_id in patient's reports array
            patient.save();
            return res.status(200).json({
                message: 'Report created successfully'
            });
        }
        return res.status(422).json({
            message: 'status not found'
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}

//all reports of a particular patient oldest to latest
module.exports.allReports = async function(req,res){
    try{
        let patient = await Patient.findById(req.params.id).populate('reports');
        if(!patient){
            return res.status(422).json({
                message: 'Patient not found'
            });
        }
        return res.status(200).json({
            message: 'All reports of patient',
            data: {
                reports: patient.reports
            }
        });
    }catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}
