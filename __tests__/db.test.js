const Books = require('../model/book.js')

const Users = require('../model/user.js')
const createUser = require('../controller/createUser')
const bcrypt = require('bcrypt')

// memoryServer
const memoryServer = require('../memoryServer.js')

beforeAll(async () => await memoryServer.connect())
afterEach(async () => await memoryServer.clearDatabase())
afterAll(async () => await memoryServer.disconnect())


describe('create', () => {
    it('first user', async () => {
        const { userId } = await createUser("jacky", '12ert3')

        const user = await Users.findById(userId).exec()
        const validPassword = await bcrypt.compareSync('12ert3', user.password)
        expect(user.name).toBe('jacky')
        expect(validPassword).toBe(true)

    })


    it('duplicate username', async () => {
        await createUser("jacky", 'fdg')
        await expect(createUser("jacky", 'we')).rejects.toThrow()
    })
})

