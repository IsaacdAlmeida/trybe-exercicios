const express = require('express');

const app = express(); // cria uma nova aplicação express

app.get('/hello', handleHelloWorldRequest); // dizer ao express que ao fazer uma requisição GET no caminho /hello, a função é chamada

app.listen(3001, () => {
  console.log('app ok na porta 3001');
}); // criar um servidor HTTP e escute requisições na porta 3001

function handleHelloWorldRequest(req, res) {
  res.status(200).send('olá, mundo! Testando');
}; // enviar o status 200 e mensagem hello world