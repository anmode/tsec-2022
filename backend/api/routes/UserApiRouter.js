const express = require('express')
const router = express.Router()

const { loginUser, gallery } = require('../controller/userController')

router.get('/login', loginUser)

module.exports = router