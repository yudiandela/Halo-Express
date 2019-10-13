const bcrypt = require('bcrypt')
const config = require('../knexfile.js')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)
const table = 'users'

/**
 * Memasukkan data ke dalam database
 * 
 * @param {array} data 
 */
const store = async (data) => {
    try {
        const { name, email, password } = data

        const saltRounds = 15;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        return db(table).insert({ name: name, email: email, password: hashPassword })
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Mengambil data user
 * 
 * @param {string} email 
 */
const get = async (email) => {
    try {
        return db(table).where({ email }).first()
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Mengambil data user login
 * 
 * @param {string} email 
 * @param {string} password Hash 
 */
const login = async (email, password) => {
    const user = await get(email)

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            return user
        } else {
            return false
        }
    }

    return false
}

module.exports = {
    store: store,
    get: get,
    login: login
}