module.exports.register = function(req,res){
    console.log(req.body);
    return res.status(200).json({
        message: 'Registered Successfully'
    });
}