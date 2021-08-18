require('dotenv').config();
const mongoose = require('mongoose')

const { MongoClient } = require('mongodb')

async function connectDatabase() {
    const URI = process.env.MONGODB_URI
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });
        console.log("db is connected.")
    } catch (err) {
        console.log("Failed to connect to Mongodb.")
    }

    return Promise.resolve()
}

async function disconnect() {
    await mongoose.connection.close()
}

module.exports.connect = connectDatabase;
module.exports.disconnect = disconnect;
