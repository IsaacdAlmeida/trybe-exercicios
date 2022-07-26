const calcularDivisao = (num1, num2) => {
  const promise = new Promise ((resolve, reject) => {
    if (num2 === 0) reject(new Error('Não pode ser feito uma divisão por zero'));

    const resultado = num1 / num2

    resolve(resultado);
  });

  return promise;
};

calcularDivisao(2,0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))


// nesse caso temos uma função que executa uma divisão
// para evitar callbacks hell, usamos uma promise
// toda promise retorna um response (resolve ou reject
// a estrutura de uma promise é a seguinte:
// new promise((resolve, reject) => {}) - uma callback inicianco com new Promise e dois params, resolve e reject