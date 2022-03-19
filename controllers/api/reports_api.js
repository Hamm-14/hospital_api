const PatientReport = require('../../models/patientReport');

//return all reports of all patients with specific status
module.exports.reports = async function(req,res){
    try{
        if(req.params.status){
            let allReports = await PatientReport.find({status:req.params.status});
            return res.status(200).json({
                message: 'All Reports',
                data: {
                    reports: allReports
                }
            });
        }
        return res.status(422).json({
            message: "Status not Found"
        });
    }catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}