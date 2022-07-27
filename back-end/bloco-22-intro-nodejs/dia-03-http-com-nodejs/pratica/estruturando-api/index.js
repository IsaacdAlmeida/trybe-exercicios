// iniciando aplicação 
// npm init -y -> npm i express -> npm i nodemon -D -> alterar package para colocar o dev e start no script
// precisamos do body-parser para fazer requisições POST

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json()); 

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
]

app.get('/recipes', function(req, res){
  res.json(recipes);
});

//----------------- Query String -------------------------

app.get('/recipes/search', function(req, res){
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((item) => item.name.includes(name) && item.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
})

//--------------------------------------------------------

// --------------- Parâmetros de rota --------------------

app.get('/recipes/:id', function(req, res) {
  const { id } = req.params;
  const recipe = recipes.find((route) => route.id === Number(id));

  if (!recipe) return res,status(404).json({ message: 'recipe not found' });

  res.status(200).json(recipe);
})

// -------------------------------------------------------

// ---------- Receber dados no body da requsição----------
app.post('/recipes', function (req, res){
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created sucessfuly' })
}); // podemos ter rotas repetidas, desde que com métodos diferentes (ou verbo)





// -------------------------------------------------------

app.listen(3001, () => {
  console.log('app rodando porta 3001');
});