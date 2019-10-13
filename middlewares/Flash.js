/**
 * Membuat session flash
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {bool} next Next
 */
const flash = (req, res, next) => {
    res.locals.flash = req.session.flash
    delete req.session.flash
    next()
}

module.exports = flash