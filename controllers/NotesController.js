// Import data yang di perlukan
const Note = require('../models/Note.js')

/**
 * Menampilkan seluruh catatan di halaman Awal
 * 
 * @param {Request} req Request
 * @param {Response} res Response
 */
const index = (req, res) => {
    const notes = Note.getAll()
    res.render('index', { notes: notes })
}

/**
 * Menampilkan form tambah catatan
 * 
 * @param {Request} req Request
 * @param {Response} res Response
 */
const create = (req, res) => {
    res.render('create')
}

/**
 * Menambahkan data ke dalam model
 * 
 * @param {Request} req Request
 * @param {Response} res Response
 */
const store = (req, res) => {
    Note.store(req.body)
    res.redirect('/')
}

// Export semua method
module.exports = {
    index: index,
    create: create,
    store: store
}