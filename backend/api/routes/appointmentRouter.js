const express = require('express')
const router = express.Router()

const { bookAppointment, fetchAppointment, doctorConfirmation } = require('../controller/appointment');

router.post('/bookAppointment', bookAppointment);
router.post('/confirmAppointment', doctorConfirmation)
router.get('/fetchAppointment', fetchAppointment);

module.exports = router