const operations = require('./operacoes');
const readline = require('readline-sync');

console.log('Calculadora simples');

const num1 = readline.questionInt('Digite um número:')
const operador =  readline.question("Digite a operação: (+, -, *, /)")
const num2 = readline.questionInt('Digite outro número:')

switch (operador) {
  case "+":
    operations.sum(num1, num2);
    break;
  case "-":
    operations.sub(num1, num2);
    break;
  case "*":
    operations.mul(num1, num2);
    break;
  case "-":
    operations.div(num1, num2);
    break;
  default:
  console.log("A operação não foi implementada");
    break;
}