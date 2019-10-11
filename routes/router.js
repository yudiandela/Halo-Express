const { Router } = require('express')
const router = new Router()

router.get('*', (req, res) => {
	res.render('index', { text: 'Halo Dunia dari Yudi Andela menyapa Dunia' })
})

module.exports = router
