require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set();

async function connectDatabase() {
    const URI = process.env.MONGODB_URI
    await mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false });

    return Promise.resolve(mongoose.connection.client)
}

exports.connect = connectDatabase;
