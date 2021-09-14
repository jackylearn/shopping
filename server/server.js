require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');


const bookRoutes = require('./routes/bookRoutes.js');
const paymentRoutes = require('./routes/paymentRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const auth = require('./controller/auth.js')

const db = require('./config/db_connection.js')
app.use(express.json()) // for other data fetch route
app.use(express.urlencoded({ extended: false })) // for form from post request

app.use((req, res, next) => { console.log(req.url); next() })

require('./controller/configSession.js')(app)
auth()

db.connect()
    .then(() => {
        app.use("/api/books", bookRoutes)
        app.use("/api/user", userRoutes)
        app.use("/auth", authRoutes)
        app.use("/payment", paymentRoutes)

        app.use((req, res) => {
            res.status(404)
                .send('Not Found')
        })
    })
    .catch(err => {
        app.get('/', (req, res) => {
            console.log(err.message)
            res.send('Database connection error')
        })
    })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('listening on port ' + PORT))
module.exports = app