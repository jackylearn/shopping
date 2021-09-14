const session = require('express-session')
const passport = require('passport')
const redis = require('redis')
const redisStore = require('connect-redis')(session)

module.exports = (app) => {

    const redisCli = redis.createClient('redis://session:6379')
    redisCli.on('connect', () => console.log('Redis is connected.'))
    redisCli.on('error', (err) => console.log(err))

    app.use(session({
        secret: process.env.SESSION_SECRET,
        store: new redisStore({ client: redisCli }),
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 10 * 1000 },
    }))
    app.use(passport.initialize());
    app.use(passport.session());
}