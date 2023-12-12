const {faker, fi} = require("@faker-js/faker");
const client = require("../../client");

async function createSuppliers() {

    for (let i = 0; i < 1000; i++) {
        const entity = {
            company_name: faker.company.name(),
            contact_name: faker.person.fullName(),
            contact_title: faker.commerce.product(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            region: faker.location.state(),
            postal_code: faker.location.zipCode(),
            country: faker.location.country(),
            phone: faker.phone.number(),
            fax: faker.phone.number(),
            homepage: faker.internet.url(),
        }

        try {
            // language=SQL format=false
            const fields = Object.keys(entity).join(", ")
            const valuesVar = Object.values(entity).map((_, index) => `$${index + 1}`).join(', ')
            const values = Object.values(entity)
            // language=SQL format=false
            const query = `INSERT INTO suppliers (${fields}) VALUES (${valuesVar})`
            await client.query(query, values);
        } catch (e) {
            console.log(e)
        }
    }

    try {
        const query = `SELECT COUNT(id)
                       FROM suppliers`
        const result = await client.query(query)
        console.log('Now We Have ' + result.rows[0].count + ' Suppliers.')
    } catch (e) {
        console.log(e)
    }
}

module.exports = createSuppliers