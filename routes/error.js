const errorPage = (req, res) => {
    res.status(404)
    res.render('error/404')
}

module.exports = errorPage