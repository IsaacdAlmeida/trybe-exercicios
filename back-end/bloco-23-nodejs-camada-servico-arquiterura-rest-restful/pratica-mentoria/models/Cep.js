const connection = require('./connection');
 
const Cep = {
  getByPk: async (cep) => {
    const [[result]] = await connection.query(`
    SELECT * FROM cep_lookup.ceps
    WHERE cep = ?
    `, [cep]);

    return result;
  },

  create: async (address) => {
    const { cep, logradouro, bairro, localidade, uf } = address; 
    
    const [{ affectedRows }] = await connection.query(`
    INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)
    `, [cep, logradouro, bairro, localidade, uf]);

    return affectedRows;
  }
};

module.exports = Cep;