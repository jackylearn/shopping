require('dotenv').config()
const express = require('express');
const app = express();

const routes = require('./routes.js')
const auth = require('./auth.js')
const db = require('./db_connection.js')
// const userSchema = require('./user_schema.js')

app.use(express.json()) // for other data fetch route
app.use(express.urlencoded({ extended: false })) // for form from post request
app.use(express.static(process.cwd() + '/client'))

db.connect()
    .then((client) => {
        const database = client.db('bookRental')
        routes(app, database)
        auth(app, database)
    })
    .catch(err => {
        app.get('/', (req, res) => {
            res.send(err)
        })
    })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening on port ' + PORT))
module.exports = app