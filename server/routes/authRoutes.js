const path = require('path')
const passport = require('passport')
const createUser = require('../controller/createUser.js')
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    const msg = await req.consumeFlash('success')
    console.log(msg)
})
router.post('/login', passport.authenticate('local', {
    successFlash: 'Welcome!',
    successRedirect: '/',
    failureFlash: 'Invalid username or password.',
    failureRedirect: '/'
}))

router.post('/register', async (req, res, next) => {
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

router.get('/fail', async (req, res) => {
    const msg2 = await req.consumeFlash('error')
    console.log(msg2)
    res.sendFile(process.cwd() + '../client/public/fail.html')
})

// router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get('/auth/google/callback',
//      passport.authenticate('google', {
//         successRedirect: '/',
//         failureRedirect: '/'
//     }))

module.exports = router