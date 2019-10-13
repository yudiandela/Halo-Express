const express = require('express')
const layouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const cookie = require('cookie-parser')
const session = require('express-session')

const route = require('./routes/router.js')
const errorPage = require('./routes/error.js')
const COOKIE_SECRET = 'sangat-rahasia' || process.env.COOKIE_SECRET
const SESSION_SECRET = '54n64t-r4h4514' || process.env.COOKIE_SECRET

const { tanggalIndo } = require('./util/helpers.js')
const flash = require('./middlewares/Flash.js')

const app = express()

// Form Stuff
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// Static Files
app.use(express.static('public'))

// Setup Views
app.set('view engine', 'ejs')
app.use(layouts)

// Middleware
app.use(logger('dev'))
app.use(cookie(COOKIE_SECRET))
app.use(
    session({
        name: 'sid',
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 2,
            sameSite: true,
            secure: false
        }
    })
)
app.use(flash)

// Setup Route
app.use(route)
app.use(errorPage)

// Setup helpers
app.locals.tanggalIndo = tanggalIndo

module.exports = app
