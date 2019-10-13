const config = require('../knexfile.js')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)
const table = 'notes'

/**
 * Mengambil seluruh catatan
 */
const getAll = async () => {
    try {
        return await db.select().from(table).orderBy('id', 'desc')
    } catch (error) {
        console.log(error.message)
    }
}

/**
 * Mengambil data id dari url parameter
 * 
 * @param {integer} id
 */
const getId = async (id) => {
    try {
        const note = await db(table).where({ id }).first()

        if (note) {
            return await db(table).where({ id }).first()
        }

        return false

    } catch (error) {
        console.lg(error.message)
    }
}

/**
 * Store data ke dalam database
 * 
 * @param {array} data
 */
const store = async (data) => {
    try {
        return await db(table).insert(data)
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
const update = async (id, data) => {
    return await db(table).where({ id }).update(data)
}

/**
 * Menghapus data berdasarkan id
 * 
 * @param {integer} id 
 */
const destroy = async (id) => {
    return await db(table).where({ id }).del()
}

// export module
module.exports = {
    getAll: getAll,
    getId: getId,
    store: store,
    update: update,
    destroy: destroy
}
