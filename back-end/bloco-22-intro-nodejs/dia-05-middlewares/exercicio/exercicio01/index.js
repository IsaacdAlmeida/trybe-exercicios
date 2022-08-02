const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const validateProductName = require('./utils/validateProductName');
const validateInfo = require('./utils/validateInfo');
const validateDate = require('./utils/validateDate');
const validateWarranty = require('./utils/validateWarranty');
const validateLogin = require('./utils/validateLogin');
const authMiddleware = require('./utils/auth-middleware');

const app = express();
app.use(bodyParser.json());


app.post('/signup', validateLogin, (_req, res) => {
  const generetadeToken = crypto.randomBytes(8).toString('hex');

  res.status(200).json({
    token: generetadeToken
  })
})

//7c64459a9afa774d

app.use(authMiddleware); // dessa forma todos os campos precisam autenticar

app.post('/sales', validateProductName, validateInfo, validateDate, validateWarranty, (_req, res) => {
  res.status(201).json({ 
    message: "venda cadastrada com sucesso"
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

