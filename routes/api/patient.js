const express = require('express');

const passport = require('passport');      //using passport for authenticate

const router = express.Router();

const patientController = require('../../controllers/api/patient_api');

//authenticate the routes with jwt strategy
router.post('/register',passport.authenticate('jwt',{session: false}),patientController.register);

router.post('/:id/create_report',passport.authenticate('jwt',{session: false}),patientController.createReport);

router.get('/:id/all_reports',passport.authenticate('jwt',{session: false}),patientController.allReports);

module.exports = router;