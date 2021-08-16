require('dotenv').config();
const mongoose = require('mongoose')


function connectDatabase() {
    const URI = process.env.MONGODB_URI
    return mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: false });
}

exports.connect = connectDatabase;
