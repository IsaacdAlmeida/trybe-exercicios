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

app.get('/recipes', function(_req, res){
  res.status(200).json(recipes);
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

  if (!recipe) return res.status(404).json({ message: 'recipe not found' });

  res.status(200).json(recipe);
})

// -------------------------------------------------------

// ---------- Receber dados no body da requsição----------
app.post('/recipes', function (req, res){
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created sucessfuly' })
}); // podemos ter rotas repetidas, desde que com métodos diferentes (ou verbo)


// ... exemplo de rota com validação de token

/* app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});
 */
// ...
// -------------------------------------------------------

// ---------- deletando e editdando dados ----------------
app.put('/recipes/:id', function(req, res) {
  const {id} = req.params;
  const {name, price} = req.body;
  const recipeIndex = recipes.findIndex((item) => item.id === Number(id));

  if(recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
})

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// -------------------------------------------------------


app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('app rodando porta 3001');
});