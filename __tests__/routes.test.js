const app = require('../server.js')
const request = require('supertest')

describe('/', () => {

    it('works', (done) => {
        request(app)
            .get('/')
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
        request(app)
            .get('/auth/google')
            .expect(200, done)
    })
})