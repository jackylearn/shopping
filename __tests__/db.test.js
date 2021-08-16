require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const Users = mongoose.model('test', new mongoose.Schema({ name: String }));

const db = require('../db_connection.js')


describe('create', () => {
    beforeAll(async () => {
        await db.connect()
    })

    afterAll(async () => {
        // reset db to make sure each test get the same result
        await Users.remove()
    })

    it('should create a doc into collection', async () => {
        const testUser = { name: "jacky" }
        await Users.create(testUser)

        const created = await Users.findOne({ name: testUser.name })
        expect(created.name).toBe(testUser.name)
    })


})