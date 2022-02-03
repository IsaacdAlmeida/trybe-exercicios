//5 programas para os operadores matématicos

const a = 10;
const b = 5;

console.log ("soma: " + (a+b));
console.log ("subtração: " + (a-b));
console.log ("multiplicação: " + (a*b));
console.log ("Divisão: " + (a/b));
console.log ("Módulo: " + (a%b));

//um programa que retorne o maior de dois números

const numMaior = 87;
const numMenor = 85;

if (numMaior > numMenor) {
    console.log ("o primeiro número é maior que o segundo");
} else {
    console.log ("o segundo número é maior que o primeiro");
}

//um programa que retorne o maior de três números

const j = 10;
const k = 13;
const l = 8;

if (j > k && j > l){
    (console.log("O maior número é o " + j));
} else if (k > j && k > l) {
    (console.log("o maior número é o " + k));
} else {
    (console.log("o maior número é o " + l));
}

//um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valorDefinido = -6;

if (valorDefinido > 0){
    console.log("positivo");
} else if (valorDefinido < 0) {
    console.log("negativo");
} else {
    console.log("Zero");
}

//um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false,caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 100
const anguloB = 50
const anguloC = 30

const somaDosAngulos = anguloA + anguloB + anguloC
const validaAngulo = anguloA > 0 && anguloB > 0 && anguloC > 0

if (validaAngulo) {
    if (somaDosAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log ("erro")
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//bônus: faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

const pecaXadrez = "BISpo";

switch (pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("Rei: Move uma casa em qualquer direção");
        break;

    case "rainha":
        console.log("Rainha: Move quantas casas quiser em qualquer direção");
        break;

    case "bispo":
        console.log("Bispo: Move quantas casas quiser, mas somente na diagonal");
        break;

    case "cavalo":
        console.log("Cavalo: Movem em 'L', duas casas para frente e uma para o lado");
        break;

    case "torre":
        console.log("Torre: Move quantas casas quiser, mas somente na vertical e horizontal");
        break;

    case "peão":
        console.log("Peão: Move uma casa para frente, no ponto inicial pode mover até duas casas");
        break;

    default:
        console.log("peça inválida, por favor insira uma peça válida");

}


//um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

const notaPorcentagem = "100";

if (notaPorcentagem < 0 || notaPorcentagem > 100){
    console.log("Nota inválida")
}
else if (notaPorcentagem >= 90) {
    console.log ("Nota A");
} else if (notaPorcentagem >= 80) {
    console.log("Nota B");
} else if (notaPorcentagem >= 70) {
    console.log("Nota C");
} else if (notaPorcentagem >= 60) {
    console.log("Nota D");
} else if (notaPorcentagem >= 50) {
    console.log("Nota E");
} else {
    console.log("Nota F");
}

// um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. 
//Caso contrário, ele retorna false .

const numAlfa = 1;
const numBeta = 5;
const numCharlie = 8;

let numPar = false;

if (numAlfa % 2 === 0 || numBeta % 2 === 0 || numCharlie % 2 === 0){
    numPar = true;
}

console.log (numPar)

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.
//Caso contrário, ele retorna false .

const numDelta = 10;
const numEcho = 2;
const numFox = 8;

let numImpar = false;

if (numDelta % 2 !== 0 || numEcho % 2 !== 0 || numFox % 2 !== 0){
    numImpar = true;
}

console.log (numImpar)

//Um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
//a empresa terá ao vender mil desses produtos.

let custoProduto = 10
let valorVenda = 20
let custoTotalProduto = custoProduto + (custoProduto * 0.2)
let totalProdutosVendidos = 1000
let lucro = (valorVenda - custoTotalProduto) * totalProdutosVendidos

console.log (lucro)

//um programa que dado um salário bruto, calcule o liquido a ser recebido

let salarioBruto = 3000;
let aliquotaINSS;



if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    aliquotaINSS = (salarioBruto * 8) / 100;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = (salarioBruto * 9) / 100;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquotaINSS = (salarioBruto * 11) / 100;
} else {
    aliquotaINSS = 570.88;
}

let aliquotaIR;
let salarioBase = salarioBruto - aliquotaINSS; 

if (salarioBase > 0 && salarioBase <= 1903.98) {
    aliquotaIR = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = (((salarioBase * 7.5)/100) - 142.80);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = (((salarioBase * 15)/100) - 354.80);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    aliquotaIR = (((salarioBase * 22.5)/100) - 636.13);
} else {
    aliquotaIR = (((salarioBase * 27.5)/100) - 869.36);
}


let salarioLiquido = salarioBase - aliquotaIR;
console.log (salarioLiquido)