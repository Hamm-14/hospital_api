const express = require('express');

const router = express.Router();

const doctorsController = require('../../controllers/api/doctors_api');

router.post('/register',doctorsController.register);

module.exports = router;