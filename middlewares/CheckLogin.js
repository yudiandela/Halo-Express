/**
 * Cek session login
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {bool} next Next
 */
const isLogin = (req, res, next) => {
    if (req.session.userId) {
        return true
    } else {
        return false
    }
    next()
}

/**
 * Mengecek login pengguna
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {bool} next Next
 */
const checkLogin = (req, res, next) => {
    if (!isLogin(req, res, next)) {
        res.redirect('/user/login')
    } else {
        next()
    }
}

/**
 * Setelah melakukan login
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {bool} next Next
 */
const afterLogin = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/')
    } else {
        next();
    }
}

module.exports = {
    isLogin, checkLogin, afterLogin
}