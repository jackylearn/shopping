require('dotenv').config()
const mongoose = require('mongoose')
const db = require('../db_connection.js')
// jest.mock('mongoose')




describe('create', () => {
    // let connection;
    const Users = mongoose.model('test', new mongoose.Schema({ name: String }));

    beforeAll(async () => {
        await db.connect()
        // connection = mongoose.connection
        // connection.on('error', console.error.bind(console, 'Database connection error'))
        // connection.on('open', () => { console.log("Database is connected") })
    })

    afterAll(async () => {
        // reset db to make sure each test get the same result
        // await Users.remove()
        // await connection.close()
    })

    it('should create a doc into collection', async () => {
        const testUser = { name: "jacky" }
        await Users.create(testUser)

        const created = await Users.findOne({ name: testUser.name })
        expect(created.name).toBe(testUser.name)
    })


})