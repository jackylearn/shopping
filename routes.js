const passport = require('passport')
const createUser = require('./controller/createUser.js')

module.exports = (app) => {

    app.use((req, res, next) => {

        console.log(req.ip + ':' + req.method + req.url)
        console.log(req.session)
        next()
    })
    app.route('/')
        .get(async (req, res) => {
            const msg = await req.consumeFlash('success')
            console.log(msg)

            res.sendFile(process.cwd() + '/public/index.html')
        })

    app.route('/login')
        .post(passport.authenticate('local', {
            successFlash: 'Welcome!',
            successRedirect: '/',
            failureFlash: 'Invalid username or password.',
            failureRedirect: '/'
        }))

    app.route('/register')
        .post(async (req, res, next) => {
            try {
                const newUser = await createUser(req.body.name, req.body.password)
                next(null, newUser)
            } catch (err) {
                req.flash('error', 'duplicate username')
                console.log('duplicate username')
                res.redirect('/')
            }
        },
            passport.authenticate('local',
                {
                    successFlash: 'Welcome!',
                    successRedirect: '/',
                    failureFlash: 'Invalid username or password.',
                    failureRedirect: '/fail'
                }
            )
        )

    app.post('/auth', passport.authenticate('local'), function (req, res) {
        console.log("passport user", req.user);
    });
    app.route('/fail')
        .get(async (req, res) => {
            const msg2 = await req.consumeFlash('error')
            console.log(msg2)
            res.sendFile(process.cwd() + '/public/fail.html')
        })

    // app.route('/auth/google')
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