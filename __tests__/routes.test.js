const app = require('../server.js')
const api = require('supertest')(app)

describe('/', () => {

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

xdescribe('/auth/google', () => {
    it('works', (done) => {
        api.get('/auth/google')
            .expect(200, done)
    })
})