require('dotenv').config()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

const Users = require('../model/user.js')


module.exports = () => {
    // Serialize and deserialize
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        // db operation
        try {
            const user = Users.findOne({ _id: id })
            done(null, user)
        } catch (err) {
            done(err, null)
        }
    })

    passport.use(new LocalStrategy({ usernameField: 'name' }, async (name, password, done) => {
        try {
            const user = await Users.findOne({ name: name })
            if (!user) return done(null, false)
            console.log(`User ${name} attempted to log in.`);
            const validPassword = await bcrypt.compareSync(password, user.password)
            if (!validPassword) return done(null, false)
            done(null, user)
        } catch (err) {
            console.log(err)
            done(null, err)
        }
    }))
}