const express = require('express')
const app = express()
const PORT = 3006;
const { createUser, getUser, getUserById, editUser } = require('./models/users');
const { validateUser } = require('./middlewares/validateUser');

app.use(express.json());

app.post('/user', 
  validateUser,
  async (req, res) => {
  try {
    const { firstName, lastName, email, password  } = req.body;

    const newUser = await createUser({ firstName, lastName, email, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  }
});

app.get('/user', async (req, res) => {
  const users = await getUser();

  res.status(200).json(users);
}) ;

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if(user.length === 0) {
    return res.status(404).json({ message: 'Not Found' });
  };

  return res.status(200).json(user);
})

app.put('/user/:id', validateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password  } = req.body;

    await editUser({ firstName, lastName, email, password, id }); // retorno será um objeto com as informações editadas
    return res.status(201).json({ firstName, lastName, email, password }); // caso queira mostrar o que foi alterado posso passar as informações no json.
  } catch (error) {
    return res.status(500).json({ message: 'server error' });
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});