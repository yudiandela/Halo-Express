const express = require('express')
const layouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const route = require('./routes/router.js')

const app = express()

// Form Stuff
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

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
