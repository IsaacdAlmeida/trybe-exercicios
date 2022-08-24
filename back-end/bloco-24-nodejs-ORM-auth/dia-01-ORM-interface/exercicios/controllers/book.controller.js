const bookService = require('../services/books.service');

const bookController = {
  getAll: async (req, res) => {
    const books = await bookService.getAll();

    res.status(200).json(books);
  }
};

module.exports = bookController;