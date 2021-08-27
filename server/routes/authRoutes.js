const path = require('path')
const passport = require('passport')
const createUser = require('../controller/createUser.js')
const express = require('express')
const router = express.Router()


const returnToFrontEnd = async (req, res) => {
    const successMsg = await req.consumeFlash('success')
    const errorMsg = await req.consumeFlash('error')
    if (successMsg && req.isAuthenticated())
        res.json({ message: successMsg[0], user: req.user.name, id: req.user._id })
    else if (successMsg)
        res.json({ message: successMsg[0] })
    else
        res.json({ message: errorMsg[0] })
}



router.post('/login', passport.authenticate('local', {
    successFlash: 'Welcome!',
    failureFlash: 'Invalid username or password.',
}), returnToFrontEnd)

router.post('/register', async (req, res, next) => {
    try {
        const newUser = await createUser(req.body.name, req.body.password)
        console.log(`New user ${req.body.name} try to register`)
        next(null, newUser)
    } catch (err) {
        res.json({ message: 'duplicate username' })
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


router.get('/logout', (req, res, next) => {
    req.logout()
    req.flash('success', 'Goodbye!')
    next()
}, returnToFrontEnd)



// router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

// router.get('/auth/google/callback',
//      passport.authenticate('google', {
//         successRedirect: '/',
//         failureRedirect: '/'
//     }))


module.exports = router