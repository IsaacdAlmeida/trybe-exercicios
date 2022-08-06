// Criar arquivo connection para conectar com o bando de dados mysql

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'exercicioModels'
});

module.exports = connection;
