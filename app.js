const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/books', booksRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
