const Cursor = require('pg-cursor')
const client = require('../../client')

async function start() {
    const productQuery = `SELECT id FROM products`
    const categories = await client.query(`SELECT id FROM categories`)
    const suppliers = await client.query('SELECT id FROM suppliers')
    const productCursor = await client.query(productQuery)
    for await (const productCursorElement of productCursor.rows) {
        const categoryID = categories.rows[Math.floor(Math.random()*categories.rows.length)].id
        const supplierID = suppliers.rows[Math.floor(Math.random()*suppliers.rows.length)].id
        await client.query(`UPDATE products SET category_id  = $1, supplier_id = $2 WHERE id = $3`, [categoryID, supplierID, productCursorElement.id])
    }

}

module.exports = start

