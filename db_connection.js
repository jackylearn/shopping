require('dotenv').config();
const mongoose = require('mongoose')

function connectDatabase() {
    const URI = process.env.MONGODB_URI
    mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => console.log("db is connected."))
    return Promise.resolve(mongoose.connection.client)
}

function disconnect() {
    mongoose.connection.close()
}

exports.connect = connectDatabase;
exports.disconnect = disconnect;
