const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function(req, res){
  res.json(drinks);
});

app.get('/drinks/:id', function(req, res){
	const { id } = req.params;
	const drink = drinks.find((route) => route.id === Number(id) );

	if(!drink) return res.status(404).json({message: 'drink not find'});
	res.status(200).json(drink);
})

app.post('/drinks', function(req, res) {
	const { id, name, price } = req.body;
	drinks.push({ id, name, price });
	res.status(201).json({ message: 'drink create sucesfully' });
})

app.listen(3001, () => {
  console.log('rodando na porta 3001');
});