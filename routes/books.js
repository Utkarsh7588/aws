const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');

// Get all books
router.get('/', (req, res) => {
  fs.readFile(booksFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading books data');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Get a book by ID
router.get('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  fs.readFile(booksFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading books data');
    } else {
      const books = JSON.parse(data);
      const book = books.find(b => b.id === bookId);
      if (book) {
        res.json(book);
      } else {
        res.status(404).send('Book not found');
      }
    }
  });
});

module.exports = router;
