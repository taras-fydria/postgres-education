const {Client} = require('pg')

const config = {
    user: 'postgres-dev',
    password: 'postgres-pass',
    database: 'postgres'
}


module.exports = new Client(config)