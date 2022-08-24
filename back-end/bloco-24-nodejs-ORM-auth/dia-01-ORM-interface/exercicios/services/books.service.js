const { Book } = require('../models'); // pega do index models?

const bookService = {
  getAll: async () => {
    const books = await Book.findAll();
    return books;
  },
};

module.exports = bookService;