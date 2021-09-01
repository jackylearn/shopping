const passport = require('passport')
const createUser = require('../controller/createUser.js')
const express = require('express')
const router = express.Router()


const returnToFrontEnd = async (req, res) => {
    const successMsg = await req.consumeFlash('success')
    if (successMsg && req.isAuthenticated())
        res.json({ message: successMsg[0], user: req.user.name, id: req.user._id })

    // logout
    else
        res.json({ message: successMsg[0] })
}

router.post('/login', passport.authenticate('local', {
    successFlash: 'Welcome!',
}), returnToFrontEnd)

router.post('/register', async (req, res, next) => {
    try {
        const newUser = await createUser(req.body.name, req.body.password)
        console.log(`New user ${req.body.name} try to register`)
        next(null, newUser)
    } catch (err) {
        res.json({ error: 'Duplicate username' })
    }
},
    passport.authenticate('local', {
        successFlash: 'Welcome!'
    }),
    returnToFrontEnd
)


router.get('/logout', (req, res, next) => {
    req.logout()
    req.flash('success', 'Goodbye!')
    next()
}, returnToFrontEnd)


module.exports = router