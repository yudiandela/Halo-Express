const express = require('express')
const route = require('./routes/router.js')

const app = express()

// Static Files
app.use(express.static('public'))

// Setup Views
app.set('view engine', 'ejs')

// Setup Route
app.use(route)

// Setup helpers
app.locals.tanggalIndo = require('./util/helpers.js').tanggalIndo;

module.exports = app
