const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

const { getAll, findById } = require('./models/Author')
const { getBooks, getBoooksById } = require('./models/Books')

app.get('/authors', async (req, res) => {
 const authors = await getAll();

 res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await getBooks();

  res.status(200).json(books);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await findById(id)

  if(!author) return res.status(404).json({ message:'Not found' });

  res.status(200).json(author);

})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await getBoooksById(id)

  if(!book) return res.status(404).json({ message:'Not found' });

  res.status(200).json(book);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))