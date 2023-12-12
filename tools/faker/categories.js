const {faker} = require('@faker-js/faker')
const client = require('../../client')


async function createCategories() {
    for (let i = 0; i < 100; i++) {
        const entity = {
            category_name: faker.commerce.department(),
            description: faker.commerce.productDescription(),
        }
        try {
            // language=SQL format=false
            const query = `INSERT INTO categories (category_name, description) VALUES ($1, $2)`
            await client.query(query, [entity.category_name, entity.description]);
        } catch (e) {
            console.log(e)
        }
    }

    try {
        const query = `SELECT COUNT(id)
                       FROM categories`
        const result = await client.query(query)
        console.log('Now We Have ' + result.rows[0].count + ' Categories.')
    } catch (e) {
        console.log(e)
    }
}

module.exports = createCategories