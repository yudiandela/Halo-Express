const express = require('express')
const route = require('./routes/router.js')

const app = express()

// Static Files
app.use(express.static('public'))

// Setup Views
app.set('view engine', 'ejs')

// Setup Route
app.use(route)

module.exports = app
