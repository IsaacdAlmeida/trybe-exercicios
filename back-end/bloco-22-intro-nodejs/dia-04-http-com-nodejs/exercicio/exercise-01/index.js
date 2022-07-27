const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
app.use(bodyParser.json());


// ------ 01 crie uma rota GET /ping --------
app.get('/ping', function(_req, res){
  res.status(200).json({ message: 'pong' });
})


// ---exerc. 02 crie uma rota POST /hello ---
app.post('/hello', function(req, res){
  const { name } = req.body;
  res.status(201).json({ message: `hello, ${name}` })
})

// exerc 03, crie uma rota POST /greetings

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if(age < 17) return res.status(401).json({ message: '401 - Unauthorized' });
  
  res.status(200).json({ message: `Hello, ${name}` });
})

// exerc 04, rota PUT ?????

app.put('/users/:name/:age', function(req, res){
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name}, você tem ${age} anos` })
})



app.listen(3001, () => {
  console.log('app rodando porta 3001');
});

