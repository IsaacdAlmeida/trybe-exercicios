const connection = require('./connection'); // precisamos do connection

const serialize = (userData) => {
  const { user_id, first_name, last_name, email } = userData;
  return {
    id: user_id,
    firstName: first_name,
    lastName: last_name,
    email
  };
};

const createUser = async ({ firstName, lastName, email, password }) => { //função que irá criar os usuários nos endpoints
  const QUERY = 'INSERT INTO exercicioModels.users (first_name, last_name, email, password) VALUES (?,?,?,?);';  // aqui passamos a query que queremos, no caso criar um usuário
  const [users] = await connection.execute(QUERY, [firstName, lastName, email, password]); // desestruturamos o array e só pegamos o usuário, fazemos o conection da query com os parametros da função
  
  const result = {
    id: users.insertId,
    firstName,
    lastName,
    email,
  }; // aqui decidimos o que retornar, no caso, do id pegamos ele automaticamente do id gerado pelo bd, e não retornamos a senha

  return result;
};

const getUser = async () => {
  const QUERY = 'SELECT * FROM exercicioModels.users;';
  const [allUsers] = await connection.execute(QUERY);

  if (allUsers.length === 0) return [];
  
  const arrayMapped = allUsers.map(serialize);

  return arrayMapped;
};

const getUserById = async (id) => {
  const QUERY = 'SELECT * FROM exercicioModels.users WHERE user_id=?;';
  
  const [selectedUser] = await connection.execute(QUERY, [id]);
  
  const user = selectedUser.map(serialize);

  return user;
}

const editUser = async ({ firstName, lastName, email, password, id }) => {
  const QUERY = 'UPDATE exercicioModels.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE user_id=?;';

  const [editedUser] = await connection.execute(QUERY, [firstName, lastName, email, password, id]);

  return editedUser; // ATENÇÃO: o retorno dessa função será somente as informações referentes ao que foi alterado, caso deseje retornar um objeto, poderá fazer diretamente na requisição
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  editUser,
};
