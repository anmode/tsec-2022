const express = require('express')
const router = express.Router()

const { loginUser, gallery } = require('../controller/userController')

router.get('/login', loginUser)
router.post('/gallery', gallery);

module.exports = router