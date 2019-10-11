const { Notes } = require('../models/Notes.js')

const index = (req, res) => {
    const notes = Notes()
    res.render('index', { notes: notes })
}

const user = (req, res) => {
    const { name } = req.params
    res.render('index', { text: `Halo ${name}` })
}

module.exports = {
    index,
    user
}
