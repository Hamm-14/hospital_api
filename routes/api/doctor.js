const express = require('express');

const router = express.Router();

const doctorsController = require('../../controllers/api/doctors_api');  //importing doctor's controller

router.post('/register',doctorsController.create);        //all routes with '/register'

router.post('/login',doctorsController.createSession);    //all routes with '/login'

module.exports = router;                                  //exporting router