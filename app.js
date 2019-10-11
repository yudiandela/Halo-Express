const express = require('express')
const layouts = require('express-ejs-layouts')
const route = require('./routes/router.js')

const app = express()

// Static Files
app.use(express.static('public'))

// Setup Views
app.set('view engine', 'ejs')
app.use(layouts)

// Setup Route
app.use(route)

// Setup helpers
app.locals.tanggalIndo = require('./util/helpers.js').tanggalIndo;

module.exports = app
