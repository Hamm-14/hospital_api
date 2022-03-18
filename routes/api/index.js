const express = require('express');

const router = express.Router();

router.use('/doctors',require('./doctors_api'));

module.exports = router;