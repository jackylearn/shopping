const db = require('../config/db_connection')
const Books = require('../model/book.js')
const bookData = require("../assets/books.js")


db.connect()
    .then(async () => {
        try {
            await Books.deleteMany({})
            console.log("Delete all books in database.")
            await Books.insertMany(bookData)
            console.log("Books data updated successfully.")
            process.exit()
        } catch (err) {
            console.log("Failed to update book data")
            console.log(err)
            process.exit(1)
        }
    })


