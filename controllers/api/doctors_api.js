const Doctor = require('../../models/doctor');

//controller for creating the doctor
module.exports.create = function(req,res){
    //if password and confirm_password doesn't match
    if(req.body.password != req.body.confirm_password){
        return res.status(400).json({
            message: 'Password does not match'
        });
    }
    //if password matches,then find the doctor in the database with mail-id
    Doctor.findOne({email:req.body.email},function(err,doctor){
        if(err){
            console.log("Error in finding the doctor",err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        //if doctor found then return because email should be unique
        if(doctor){
            return res.status(400).json({
                message: 'User already exist'
            });
        }
        Doctor.create(req.body,function(err){
            if(err){
                console.log("error in sign-up doctor creation",err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            return res.status(200).json({
                message: 'Registered Successfuly'
            });
        });
    });
}
