const exerc = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject(new Error('Informe apenas números'));
    const result = ((a + b) * c)
    if (result < 50) reject (new Error('valor muito baixo'))

    resolve(result)
  })

  return promise;
}

/* exerc(1, 'a', 30)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)) */

const getRandomNumber = async () => {
  const randomNumbers = Array.from({ length:3 }, () => Math.floor(Math.random() * 100 + 1));
  
  const result = await exerc(...randomNumbers);
  console.log(result)
}

getRandomNumber()