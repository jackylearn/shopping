const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    // ISBN: {
    //     type: String,
    //     required: true
    // },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'TWD']
    },
    content: {
        type: Buffer,
        required: true,
    },
    extension: {
        type: String,
        enum: ['txt', 'pdf']
    },
    updated_on: {
        type: Date,
    },
})


module.exports = mongoose.model('book', bookSchema);