const express = require('express')
const client = require('./client')

async function start() {
    const app = express()
    await client.connect()
    await client.query()
    app.listen(() => console.log('app started'))
}

start()