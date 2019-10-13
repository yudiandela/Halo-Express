
exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.timestamps(false, true)

        table.unique('email')
    })
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('users')
}