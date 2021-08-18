const app = require('../server.js')
const api = require('supertest')(app)

// memoryServer
const memoryServer = require('../memoryServer.js')

// beforeAll(async () => await memoryServer.connect())
afterEach(async () => await memoryServer.clearDatabase())
// afterAll(async () => await memoryServer.disconnect())

describe('GET /', () => {

    it('works', (done) => {
        api.get('/')
            .expect(res => res.statusCode === 200)
            .expect(res => res.text === 'hi')
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })

})

describe('POST /register', () => {
    it('register new user', (done) => {
        api.post('/register')
            .send({ name: 'kk', password: 'ggg' })
            .expect(res => res.statusCode === 200)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
})

xdescribe('/auth/google', () => {
    it('works', (done) => {
        api.get('/auth/google')
            .expect(200, done)
    })
})