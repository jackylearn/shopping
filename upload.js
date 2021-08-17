const fs = require('fs').promises;
const db = require('./db_connection.js')
const Books = require('./model/book.js')
const dir = "./assets/books"


db.connect()
    .then(async (client) => {
        const books = await fs.readdir(dir)

        console.log(books)
        for (let book of books) {
            const bookPath = dir + "/" + book
            const file = await fs.readFile(bookPath)
            const bookInfos = book.split(/[_\.]/)
            let title, author, extension;
            if (bookInfos.length === 3)
                [title, author, extension] = bookInfos
            else if (bookInfos.length === 2) {
                [title, extension] = bookInfos
                author = 'anonymous'
            }
            else
                continue

            const newBook = new Books({
                title: title,
                author: author,
                extension: extension,
                content: file,
                price: 0.15,
                currency: "USD",
                uploaded_on: new Date()
            })
            const uploaded = await newBook.save()
            await fs.rename(bookPath, bookPath + "_" + uploaded._id)
        }
        client.close()
    })
    .catch(err => console.error(err))


