const express = require('express');

const passport = require('passport');      //using passport for authentication

const router = express.Router();

const reportController = require('../../controllers/api/reports_api');  //importing reports controller

router.get('/:status',passport.authenticate('jwt',{session: false}),reportController.reports); //authentication wth jwt

module.exports = router;  //exporting router