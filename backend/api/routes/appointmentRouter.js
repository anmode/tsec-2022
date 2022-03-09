const express = require('express')
const router = express.Router()

const { bookAppointment } = require('../controller/appointment');

router.post('/bookAppointment', bookAppointment);

module.exports = router