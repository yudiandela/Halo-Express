// Import data yang di perlukan
const Note = require('../models/Note.js')
const { isLogin } = require('../middlewares/CheckLogin.js')

/**
 * Menampilkan seluruh catatan di halaman Awal
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const index = async (req, res) => {
    const notes = await Note.getAll()
    res.render('notes/index', { notes: notes, isLogin: isLogin(req, res) })
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
const store = async (req, res) => {
    await Note.store(req.body)
    req.session.flash = {
        title: 'Berhasil',
        text: 'Menambahkan sebuah catatan',
        status: 'success'
    }
    res.redirect('/note')
}

const show = async (req, res) => {
    try {
        const note = await Note.getId(req.params.id)
        if (req.params.id == note.id) {
            res.render('notes/show', { note: note })
        }
        res.render('404')
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Menampilkan form ubah catatan
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const edit = async (req, res) => {
    const note = await Note.getId(req.params.id)
    res.render('notes/edit', { note: note })
}

/**
 * Mengubah data catatan berdasarkan id
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const update = async (req, res) => {
    const { id } = req.params
    await Note.update(id, req.body)
    req.session.flash = {
        title: 'Berhasil',
        text: 'Mengubah catatan ' + req.body.title,
        status: 'success'
    }
    res.redirect('/note')
}

/**
 * Menghapus dengan data specific
 * 
 * @param {string} req Request
 * @param {string} res Response
 */
const destroy = async (req, res) => {
    const { id } = req.params
    await Note.destroy(id)
    req.session.flash = {
        title: 'Berhasil',
        text: 'Menghapus catatan ' + id,
        status: 'success'
    }
    res.redirect('/note')
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