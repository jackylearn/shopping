require('dotenv').config()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;



module.exports = (app, db) => {
    // Serialize and deserialize
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        // db operation
        db.findOne({ _id: new ObjectId(id) }, (err, doc) => {
            done(null, doc)
        })
    })


    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:' + (process.env.PORT || 3000) + '/auth/google/callback',
        passReqToCallback: true,
    }, (request, accessToken, refreshToken, profile, done) => {
        // db operation

    }))
}