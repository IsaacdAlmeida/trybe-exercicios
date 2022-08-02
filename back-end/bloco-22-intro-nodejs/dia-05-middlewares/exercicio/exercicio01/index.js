const express = require('express');
const bodyParser =  require('body-parser');
const validateProductName = require('./utils/validateProductName');
const validateInfo = require('./utils/validateInfo');
const validateDate = require('./utils/validateDate');
const validateWarranty = require('./utils/validateWarranty');

const app = express();
app.use(bodyParser.json());


app.post('/sales', validateProductName, validateInfo, validateDate, validateWarranty, (_req, res) => {
  res.status(201).json({ 
    message: "venda cadastrada com sucesso"
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

