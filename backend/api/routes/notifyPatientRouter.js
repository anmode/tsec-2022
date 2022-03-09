const express = require('express')
const router = express.Router()

const { notifyPatient } = require('../controller/notifyWhatsappController');

router.post('/notify', notifyPatient);

module.exports = router