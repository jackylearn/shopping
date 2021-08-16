require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

async function connectDatabase() {
    const URI = process.env.MONGODB_URI
    await mongoose.connect(URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

    return Promise.resolve(mongoose.connection.client)
}

exports.connect = connectDatabase;
