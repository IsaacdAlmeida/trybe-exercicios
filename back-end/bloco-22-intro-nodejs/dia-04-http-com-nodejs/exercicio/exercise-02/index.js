const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, createSimpsons } = require('./fs-utils')
const app = express();

app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  try {
    const simpsonsArray = await readSimpsons();

    return res.status(200).json(simpsonsArray);
  } catch (error) {
    return res.status(500).end();
  }
})

app.get('/simpsons/:id', async (req, res) => {
  try {
    const simpsonsArray = await readSimpsons();
    const { id } = req.params;
    const simpson = simpsonsArray.find((route) => route.id === id);
    
    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }
    return res.status(200).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
})

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsonsArray = await readSimpsons();
    if (simpsonsArray.some((item) => item.id === id)){
      return res.status(409).json({ message: 'id already exists' })
    }
simpsonsArray.push({ id, name });
await createSimpsons(simpsonsArray);
return res.status(204).end();
  } catch (error) {
  return res.status(500).end();
  }
})

app.listen(3001, () => {
  console.log('aplicação simpsons rodando na porta 3001');
});
