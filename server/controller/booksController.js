const Books = require('../model/book.js')

const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({})
        res.json(books)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        res.json(book)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = {
    getBookById,
    getAllBooks,
}