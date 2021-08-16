require('dotenv').config()
const mongoose = require('mongoose')
const testSchema = new mongoose.Schema({ name: String })
const Users = mongoose.model('test', testSchema);

const db = require('../db_connection.js')


describe('create', () => {
    beforeAll(async () => {
        await db.connect()
    })



    it('should create a doc into collection', async () => {
        const testUser = { name: "jacky" }
        await Users.create(testUser)

        const created = await Users.findOne({ name: testUser.name })
        expect(created.name).toBe(testUser.name)
    })

    afterAll(async () => {
        // reset db to make sure each test get the same result
        await Users.remove()
        await mongoose.connection.close()
    })

})