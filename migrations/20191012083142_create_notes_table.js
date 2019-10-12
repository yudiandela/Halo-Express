
exports.up = (knex, Promise) => {
    return knex.schema.createTable('notes', (table) => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.string('user').notNullable()
        table.text('body').notNullable()
        table.timestamps(false, true)
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('notes')
}
