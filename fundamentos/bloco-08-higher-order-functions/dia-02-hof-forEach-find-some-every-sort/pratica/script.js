const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((item, posicao, array) => { // o forEach (HOF) espera uma outra função com 3 parâmetros (primeiro obrigatório e outros dois opcionais)
  showEmailList(item) // aqui a gente chama outra função já criada e passa como parâmetro o primeiro item - que nesse caso representa cada email do array (emailListInData)
  console.log(`seu email está na posição ${posicao}`); // o segundo parametro do forEach retorna a posicao do elemento dentro do array
  console.log(`Outros ${array.length} estão cadastrados no nosso banco de dados`); // o terceiro parametro do forEach retorna todo o array
})

// Array.find


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 15 === 0); // retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. caso contrário retorna undefine

console.log(findDivisibleBy3And5())

// array.some e array.every

// .some() testa se ao menos um dos elementos passa no teste e retorna true or false

// exemplo 

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((item) => item === name)
}

console.log(hasName(names, 'Ana'))
