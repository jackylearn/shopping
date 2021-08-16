const passport = require('passport')

module.exports = (app, db) => {

    app.route('/')
        .get((req, res) => {
            res.send('hi')
        })
    app.route('/login')
        .post((req, res) => {
            res.send('login')
        })

    app.route('/auth/google')
        .get(passport.authenticate('google', { scope: ['profile'] }))

    app.route('/auth/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/'
        }))

    app.use((req, res) => {
        res.status(404)
            .send('Not Found')
    })
}