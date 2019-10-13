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
    await User.store(userData)

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
    const check = await User.login(req.body.email, req.body.password)

    if (check) {
        console.log('Login Berhasil')
        res.redirect('/')
    } else {
        console.log('Login Gagal')
        res.redirect('/user/login')
    }
}

module.exports = {
    register: register,
    store: store,
    login: login,
    processLogin: processLogin
}