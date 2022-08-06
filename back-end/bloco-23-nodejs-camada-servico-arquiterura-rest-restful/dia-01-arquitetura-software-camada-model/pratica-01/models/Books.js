const connection = require('./connection');

/* const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
} */

const getBooks = async () => {
  const [books] = await connection.execute('SELECT title FROM books');

  return books;/* .map(serialize); */
};

const getBoooksById = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books WHERE author_id=?', [id]);

  if (books.length === 0) return null;

  return books.map ((id, title, author_id) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

module.exports = {
  getBooks,
  getBoooksById,
};