/**
 * Redirect Halaman ke Note
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const index = async (req, res) => {
    res.redirect('/note')
}

module.exports = {
    index
}