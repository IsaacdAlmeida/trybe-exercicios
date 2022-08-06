require('cors');
require('dotenv').config(); // definimos nossa variável de ambiente para ser utilizada

const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const express = require('express');
const PORT = process.env.API_PORT || 3004; // definimos a porta como sendo 
const app = express();
app.use(express.json()); // faz a substituição do body parser

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))