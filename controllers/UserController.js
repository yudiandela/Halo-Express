const User = require('../models/User.js')

/**
 * Menampilkan halaman form Register
 * 
 * @param {string} req 
 * @param {string} res 
 */
const register = (req, res) => {
    res.render('user/register')
}

/**
 * Menambahkan data ke dalam database
 * 
 * @param {string} req 
 * @param {string} res 
 */
const store = async (req, res) => {
    // Ambil data request dari form
    const { name, email, password } = req.body

    // Tambahkan kedalam variabel
    const userData = {
        name, email, password
    }

    // Masukkan data kedalam database
    // Melalui file model
    const newUser = await User.store(userData)

    // Mengambil data userId dan masukkan ke session
    req.session.userId = newUser[0]

    // Redirect Halaman ke Beranda  
    res.redirect('/')
}

/**
 * Menampilkan halaman form login
 * 
 * @param {string} req 
 * @param {string} res 
 */
const login = (req, res) => {
    res.render('user/login')
}

/**
 * Melakukan prosess login
 * 
 * @param {string} req 
 * @param {string} res 
 */
const processLogin = async (req, res) => {
    // Ambil data request dari form
    // lalu cek ke dalam database
    const user = await User.login(req.body.email, req.body.password)

    if (user) {
        req.session.userId = user.id
        res.redirect('/')
    } else {
        res.redirect('/user/login')
    }
}

/**
 * Melakukan prosess logout
 * 
 * @param {string} req 
 * @param {string} res 
 */
const processLogout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.redirect('/');
        }
        res.clearCookie('sid');
        res.redirect('/user/login');
    })
}

module.exports = {
    register: register,
    store: store,
    login: login,
    processLogin: processLogin,
    processLogout: processLogout
}