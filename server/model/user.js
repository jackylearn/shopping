const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: new Date()
    },
    follow: [String],
    purchased: [
        {
            id: String,
            expired: Date
        }
    ]
})

module.exports = mongoose.model('user', userSchema)
