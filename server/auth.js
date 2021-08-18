require('dotenv').config()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

const ObjectID = require('mongodb').ObjectID;
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const Users = require('./model/user.js')


module.exports = () => {
    // Serialize and deserialize
    passport.serializeUser((user, done) => {
        console.log("hi serializeUser")
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        console.log("hi deserializeUser")
        // db operation
        try {
            const user = Users.findOne({ _id: id })
            done(null, user)
        } catch (err) {
            done(err, null)
        }
    })

    passport.use(new LocalStrategy({ usernameField: 'name' }, async (name, password, done) => {
        console.log('in strategy')
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

    // passport.use(new GoogleStrategy({
    //     clientID: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     callbackURL: 'http://127.0.0.1:' + (process.env.PORT || 3000) + '/auth/google/callback',
    //     passReqToCallback: true,
    // }, (request, accessToken, refreshToken, profile, done) => {
    //     // db operation

    // }))
}