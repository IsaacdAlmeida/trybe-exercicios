const createEmployees = (firstName, lastName) => {
  const employeesData = {
    nomeCompleto: `${firstName} ${lastName}`,
    email: `${firstName}_${lastName}@trybe.com`,
  };
  return employeesData;
}

const newEmployees = () => {
  const employees = {
    id1: createEmployees('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmployees('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmployees('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());