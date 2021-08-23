const path = require('path')
const passport = require('passport')
const createUser = require('../controller/createUser.js')
const express = require('express')
const router = express.Router()

const getUserInfo = require('../controller/getUserInfo.js')

const returnToFrontEnd = async (req, res) => {
    const successMsg = await req.consumeFlash('success')
    const errorMsg = await req.consumeFlash('error')
    if (successMsg) {
        res.json({ success: successMsg[0], user: req.session.passport.user })
    } else {
        res.json({ error: errorMsg[0] })
    }
}


router.post('/login', passport.authenticate('local', {
    successFlash: 'Welcome!',
    failureFlash: 'Invalid username or password.',
}), returnToFrontEnd)

router.post('/register', async (req, res, next) => {
    try {
        const newUser = await createUser(req.body.name, req.body.password)
        next(null, newUser)
    } catch (err) {
        res.json({ error: 'duplicate username' })
    }
},
    passport.authenticate('local',
        {
            successFlash: 'Welcome!',
            failureFlash: 'Invalid username or password.',
        }
    ),
    returnToFrontEnd
)


router.get('/logout', (req, res) => {
    req.logout()
    next()
}, returnToFrontEnd)

router.get('/:id', getUserInfo)

// router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get('/auth/google/callback',
//      passport.authenticate('google', {
//         successRedirect: '/',
//         failureRedirect: '/'
//     }))


module.exports = router