const { Router } = require('express')
const homeController = require('../controllers/HomeController.js')

const router = new Router()

router.get('/', homeController.index)
router.get('/user/:name', homeController.user)

module.exports = router
