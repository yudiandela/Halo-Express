const { Router } = require('express')
const HomeController = require('../controllers/HomeController.js')

const router = new Router()

router.get('/', HomeController.index)

module.exports = router
