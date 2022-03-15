// como fazer o destructuring?
// no caso do seguinte objeto:

const product = {
  name: 'Keyboard',
  brand: 'Ducky',
  // id: 1,
}

// o destructuring é feito antes do sinal de atribuição

// const { name, id } = product // destructuring com objeto, basta selecionar as propriedades a serem copiadas só especificando os nomes delas

// posso mudar o nome da chave do objeto original
// também podemos passar um default parameter no destructuring
// se a propriedade default existir no objeto, o valor original que será passando
const { name: techProduct, brand: manufacturing, id = 0 } = product;


console.log(techProduct, manufacturing, id);

// objetos com propriedades aninhadas

const brazilStates = {
  pernambuco: {
    região: 'Nordeste',
    capital: 'Recife'
  },
  minasGerais: {
    região: 'Sudeste',
    capital: 'Belo Horizonte'
  },
  amazonas: {
    região: 'Norte',
    capital: 'Manaus'
  }
}

// const { p, amazonas: { região } } = brazilStates; // nesse caso eu posso acessar a chave do objeto que eu quero fazer o destructuring dessa maneira

// console.log(pernambuco, região);

