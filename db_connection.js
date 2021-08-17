require('dotenv').config();
const mongoose = require('mongoose')

async function connectDatabase() {
    const URI = process.env.MONGODB_URI
    await mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => console.log("db is connected."))
    return Promise.resolve(mongoose.connection.client)
}

exports.connect = connectDatabase;
