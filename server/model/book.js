const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
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
    // extension: {
    //     type: String,
    //     enum: ['txt', 'pdf']
    // },
    updated_on: {
        type: Date,
        default: new Date()
    },
})


module.exports = mongoose.model('book', bookSchema);