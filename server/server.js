require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes.js')
const auth = require('./auth.js')
const passport = require('passport')
const session = require('express-session')
const { flash } = require('express-flash-message')

const db = require('./db_connection.js')
app.use(express.json()) // for other data fetch route
app.use(express.urlencoded({ extended: false })) // for form from post request
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 10 * 1000 },
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())


db.connect()
    .then(() => {
        auth()
        routes(app)
    })
    .catch(err => {
        app.get('/', (req, res) => {
            console.log(err.message)
            res.send('Database connection error')
        })
    })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on port ' + PORT))
module.exports = app