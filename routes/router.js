// Import data yang di perlukan
const { Router } = require('express')
const RootController = require('../controllers/RootController.js')
const NoteController = require('../controllers/NoteController.js')
const UserController = require('../controllers/UserController.js')

// Middleware
const { checkLogin, afterLogin } = require('../middlewares/CheckLogin.js')

// Inisialisasi Router
const router = new Router()

// Root Route
router.get('/', RootController.index)

// CRUD Notes dengan middleware checkLogin
router.get('/note', NoteController.index)
router.get('/note/create', checkLogin, NoteController.create)
router.post('/note', checkLogin, NoteController.store)
router.get('/note/:id/edit', checkLogin, NoteController.edit)
router.put('/note/:id', checkLogin, NoteController.update)
router.delete('/note/:id', checkLogin, NoteController.destroy)
router.get('/note/:id', NoteController.show)

// User Auth dengan middleware afterLogin
router.get('/user/register', afterLogin, UserController.register)
router.post('/user/register', afterLogin, UserController.store)
router.get('/user/login', afterLogin, UserController.login)
router.post('/user/login', afterLogin, UserController.processLogin)
router.post('/user/logout', checkLogin, UserController.processLogout)

// Export method
module.exports = router
