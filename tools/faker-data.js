const createCategories = require('./faker/categories')
const client = require('../client')
const createProducts = require('./faker/products')
const createSuppliers = require('./faker/suppliers')
const relations = require('./faker/relations')

async function start() {
    const startTime = new Date().getTime()
    try {
        await client.connect()
        await createCategories()
        await createProducts()
        await createSuppliers()
        await relations()
        await client.end()
    } catch (e) {
        console.log(e)
    } finally {
        const endTime = new Date().getTime()
        console.log('Data was created')
        console.log(endTime - startTime + ' ms')
    }
}


start()
