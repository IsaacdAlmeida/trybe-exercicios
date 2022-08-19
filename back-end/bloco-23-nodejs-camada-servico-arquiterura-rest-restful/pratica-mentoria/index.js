require('dotenv').config(); // para usar o dotenv
require('express-async-errors');
const express = require('express');
const cepRoute = require('./routes/cep.route');
const errorMiddleware = require('./middlewares/error.middleware')
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong!' });
});
app.use('/cep', cepRoute);
 
app.use(errorMiddleware);

const PORT = process.env.API_PORT || 3000; // DEFINE A PORTA NUMA VAR DE AMBIENTE
app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));