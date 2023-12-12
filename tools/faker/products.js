const {faker, fi} = require("@faker-js/faker");
const client = require("../../client");

async function createProducts() {

    for (let i = 0; i < 1000; i++) {
        const entity = {
            product_name: faker.commerce.productName(),
            quantity_per_init: faker.number.int({min: 1, max: 100}),
            unit_price: faker.number.int({min: 1, max: 1000}),
            unit_in_stock: faker.number.int({min: 0, max: 1000}),
            units_on_order: faker.number.int({min: 1, max: 10}),
            reorder_level: faker.number.int({min: 1, max: 10}),
            discount: faker.number.int({min: 0, max: 99}),
        }

        try {
            // language=SQL format=false
            const fields = Object.keys(entity).join(", ")
            const valuesVar = Object.values(entity).map((_, index) => `$${index + 1}`).join(', ')
            const values = Object.values(entity)
            // language=SQL format=false
            const query = `INSERT INTO products (${fields}) VALUES (${valuesVar})`
            await client.query(query, values);
        } catch (e) {
            console.log(e)
        }
    }

    try {
        const query = `SELECT COUNT(id)
                       FROM products`
        const result = await client.query(query)
        console.log('Now We Have ' + result.rows[0].count + ' Products.')
    } catch (e) {
        console.log(e)
    }
}

module.exports = createProducts