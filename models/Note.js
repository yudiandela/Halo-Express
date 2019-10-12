const config = require('../knexfile.js')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)
const table = 'notes'

/**
 * Mengambil seluruh catatan
 */
const getAll = () => {
    try {
        return db.select().from(table)
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Mengambil data id dari url parameter
 * 
 * @param {integer} id
 */
const getId = (id) => {
    return db.select().from(table).first()
}

/**
 * Store data ke dalam database
 * 
 * @param {array} data
 */
const store = (data) => {
    try {
        return db(table).insert(data)
    } catch (error) {
        console.lg(error.message)
    }
}

/**
 * Mengubah data berdasarkan id
 * 
 * @param {integer} id 
 * @param {array} data 
 */
const update = (id, data) => {
    return db(table).where({ id }).update(data)
}

/**
 * Menghapus data berdasarkan id
 * 
 * @param {integer} id 
 */
const destroy = (id) => {
    return db(table).where({ id }).del()
}

// export module
module.exports = {
    getAll: getAll,
    getId: getId,
    store: store,
    update: update,
    destroy: destroy
}
