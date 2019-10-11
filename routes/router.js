// Import data yang di perlukan
const { Router } = require('express')
const NotesController = require('../controllers/NotesController.js')

// Inisialisasi Router
const router = new Router()

// CRUD Method 
router.get('/', NotesController.index)
router.get('/create', NotesController.create)
router.post('/', NotesController.store)
router.get('/:id', NotesController.show)
router.put('/:id', NotesController.update)
router.get('/:id/edit', NotesController.edit)

// Export method
module.exports = router
