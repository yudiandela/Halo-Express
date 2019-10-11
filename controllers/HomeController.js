const index = (req, res) => {
	res.render('index', { text: 'Hallo Dari HomeController' })
}

const user = (req, res) => {
	const { name } = req.params
	res.render('index', { text: `Halo ${name}` })
}

module.exports = {
	index: index,
	user: user
}
