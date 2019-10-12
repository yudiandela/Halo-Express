// Import data yang di perlukan
const Note = require('../models/Note.js')

/**
 * Menampilkan seluruh catatan di halaman Awal
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const index = (req, res) => {
    const notes = Note.getAll()
    res.render('index', { notes: notes })
}

/**
 * Menampilkan form tambah catatan
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const create = (req, res) => {
    res.render('notes/create')
}

/**
 * Menambahkan data ke dalam model
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const store = (req, res) => {
    Note.store(req.body)
    res.redirect('/')
}

const show = (req, res) => {
    const note = Note.getId(req.params.id)
    res.render('notes/show', { note: note })
}

/**
 * Menampilkan form ubah catatan
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const edit = (req, res) => {
    const note = Note.getId(req.params.id)
    res.render('notes/edit', { note: note })
}

/**
 * Mengubah data catatan berdasarkan id
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const update = (req, res) => {
    const { id } = req.params
    Note.update(id, req.body)
    res.redirect('/')
}

/**
 * Menghapus dengan data specific
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const destroy = (req, res) => {
    const { id } = req.params
    Note.destroy(id)
    res.redirect('/')
}

// Export semua method
module.exports = {
    index: index,
    create: create,
    store: store,
    show: show,
    edit: edit,
    update: update,
    destroy: destroy
}