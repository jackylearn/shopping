const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, getBookContentById } = require('../controller/booksController.js')

//@desc     GET all books from DB
//@route    GET /api/books/
//@access   public
router.get('/', getAllBooks)

//@desc     GET a specific book from DB
//@route    GET /api/books/:id
//@access   public
router.get('/:id', getBookById)

//@desc     GET a specific book content from DB
//@route    GET /api/books/viewer/:id
//@access   public
router.get('/viewer/:id', getBookContentById)

module.exports = router;