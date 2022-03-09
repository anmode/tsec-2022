const express = require('express')
const router = express.Router()

const { addDiet, getTodayDiet } = require('../controller/dietController')

router.post('/', addDiet)
router.get('/', getTodayDiet)

module.exports = router