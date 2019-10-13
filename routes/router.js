// Import data yang di perlukan
const { Router } = require('express')
const NotesController = require('../controllers/NotesController.js')
const UsersController = require('../controllers/UsersController.js')

// Inisialisasi Router
const router = new Router()

// CRUD Notes
router.get('/', NotesController.index)
router.get('/create', NotesController.create)
router.post('/', NotesController.store)
router.get('/:id/edit', NotesController.edit)
router.put('/:id', NotesController.update)
router.delete('/:id', NotesController.destroy)
router.get('/:id', NotesController.show)

// User Auth
router.get('/user/register', UsersController.register)
router.post('/user/register', UsersController.store)
router.get('/user/login', UsersController.login)
router.post('/user/login', UsersController.processLogin)

// Export method
module.exports = router
