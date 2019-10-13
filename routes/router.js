// Import data yang di perlukan
const { Router } = require('express')
const RootController = require('../controllers/RootController.js')
const NoteController = require('../controllers/NoteController.js')
const UserController = require('../controllers/UserController.js')

// Inisialisasi Router
const router = new Router()

// Root Route
router.get('/', RootController.index)

// CRUD Notes
router.get('/note', NoteController.index)
router.get('/note/create', NoteController.create)
router.post('/note', NoteController.store)
router.get('/note/:id/edit', NoteController.edit)
router.put('/note/:id', NoteController.update)
router.delete('/note/:id', NoteController.destroy)
router.get('/note/:id', NoteController.show)

// User Auth
router.get('/user/register', UserController.register)
router.post('/user/register', UserController.store)
router.get('/user/login', UserController.login)
router.post('/user/login', UserController.processLogin)

// Export method
module.exports = router
