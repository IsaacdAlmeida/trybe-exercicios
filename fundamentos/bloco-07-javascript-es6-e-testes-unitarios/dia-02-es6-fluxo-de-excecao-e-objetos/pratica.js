/* // isso é uma EXCEÇÃO

try { // tente executar, caso ocorra um erro, cai em outro bloco
  console.log(naoExisto); //uma execção, a variável não existe, então posso exibir o valor de uma variável que não existe ainda no programa
} catch (err) {//pode ser qualquer nome no parâmetro relacionado a erro, esse bloco vai executar somente se houver erro no anterior
  console.log('naoExisto não existe.');
} // não é uma boa prática exibir pro usuário um erro do código */

const soma = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw('x e y precisam ser números');
  }
  return x + y;
}

console.log(soma('1',2));