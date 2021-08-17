const passport = require('passport')
const createUser = require('./controller/createUser.js')

module.exports = (app) => {

    app.route('/')
        .get((req, res) => {
            console.log('hi3')
            res.sendFile(process.cwd() + '/public/index.html')
        })

    // app.route('/login')
    //     .post(passport.authenticate('local', {
    //         successFlash: 'Welcome!',
    //         successRedirect: '/',
    //         failureFlash: 'Invalid username or password.',
    //         failureRedirect: '/'
    //     }))

    app.route('/register')
        .post(async (req, res, next) => {
            try {
                const newUser = await createUser(req.body.name, req.body.password)
                next(null, newUser)
            } catch (err) {
                req.flash('duplicate username')
                console.log('duplicate username')
                res.redirect('/')
            }

        }, passport.authenticate('local', {
            successFlash: 'Welcome!',
            successRedirect: '/',
            failureFlash: 'Invalid username or password.',
            failureRedirect: '/fail'
        }))
    app.route('/fail')
        .get((req, res) => res.sendFile(process.cwd() + '/public/fail.html'))

    // app.route('/auth/goo gle')
    //     .get(passport.authenticate('google', { scope: ['profile'] }))

    // app.route('/auth/google/callback')
    //     .get(passport.authenticate('google', {
    //         successRedirect: '/',
    //         failureRedirect: '/'
    //     }))

    app.use((req, res) => {
        res.status(404)
            .send('Not Found')
    })
}