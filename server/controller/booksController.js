const Books = require('../model/book.js')
const Users = require('../model/user.js')

const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find({})
        res.json(books)
    } catch (err) {
        res.status(500).json({ message: "Server Error" })
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        res.json(book)
    } catch (err) {
        res.status(500).json({ message: "Server Error" })
    }
}

const getBookContentById = async (req, res) => {
    const userId = req.query.userId
    const bookId = req.params.id
    try {
        const user = await Users.findById(userId).exec()
        if (!user.purchased.get(bookId))
            throw new Error('You are trying to see a book you have not purchased yet.')
        if (user.purchased.get(bookId) < Date.now())
            throw new Error(`Book may be expires.`)

        res.send({ success: `User ${userId} try to get book ${bookId}.` })

    } catch (err) {
        res.send({ error: err.message })
    }
}


module.exports = {
    getBookById,
    getAllBooks,
    getBookContentById,
}