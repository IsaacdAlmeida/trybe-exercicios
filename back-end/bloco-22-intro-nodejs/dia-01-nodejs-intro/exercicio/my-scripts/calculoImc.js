const { questionInt, questionFloat } = require('readline-sync');

const imcCalculo = (peso, altura) => {
  const alturaEmMetros = altura/100;
  
  const imc = (peso / ( alturaEmMetros ** 2 ));

  return imc;
};

const readlineCalc = () => {
  const altura = questionInt('Qual sua altura(Em Centímetros)? ');
  const peso = questionFloat('Qual seu peso?(ex: 80 ou 76.2) ');

  const imcResult = imcCalculo(peso, altura);

  console.log(`Seu IMC: ${imcResult.toFixed(2)}`);

}

readlineCalc();
