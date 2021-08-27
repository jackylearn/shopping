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
    follow: {
        type: Map,
        of: String,
        default: new Map()
    },
    purchased: {
        type: Map,
        of: String,
        default: new Map()
    }
})

module.exports = mongoose.model('user', userSchema)
