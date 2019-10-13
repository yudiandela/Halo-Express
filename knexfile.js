// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            database: 'db_catatan_express',
            user: 'root',
            password: ''
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    staging: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            database: 'db_catatan_express',
            user: 'postgres',
            password: 'postgres'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        }
    }

};
