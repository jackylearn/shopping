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
        process.exit(1)
    }

    return Promise.resolve()
}
module.exports.connect = connectDatabase;
