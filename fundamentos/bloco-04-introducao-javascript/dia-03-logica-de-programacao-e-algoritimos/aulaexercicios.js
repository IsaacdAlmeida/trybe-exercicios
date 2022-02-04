// 1
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é:

/* let soma = 0;

for(let index = 1; index <= 50; index += 1){
    soma += index;
    
}

console.log ("A soma total de 1 a 50 é " + soma); */


// 2
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

/* let resultado = 0;

for (let index = 2; index <= 150; index += 1){
    if(index % 3 === 0){
        resultado = resultado + 1;
    } 
}

if (resultado === 50){
    console.log("Parabéns, você descobriu!")
} */

// 3
// Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
/* 
let playerOne = "papel"
let playerTwo = "pedra"

if (playerOne == playerTwo){
    console.log("A ties");
}

if (playerOne == "pedra"){
    if (playerTwo == "tesoura"){
        console.log("Player 1 won")
    } else if (playerTwo == "papel") {
        console.log("Player 2 won");
    }
}

if (playerOne == "tesoura"){
    if (playerTwo == "papel"){
        console.log("Player 1 won")
    } else if (playerTwo == "pedra") {
        console.log("Player 2 won");
    }
}

if (playerOne == "papel"){
    if (playerTwo == "pedra"){
        console.log("Player 1 won")
    } else if (playerTwo == "tesoura") {
        console.log("Player 2 won");
    }
} */


// 4
// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

/* let idade = 0;

if (idade >= 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade");
} */

//com operador ternário
let idade = 18;

idade >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade");


// 5 
// Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

/* let carol = 19
let murilo = 18
let baeta = 17

if (carol < murilo && carol < baeta) {
    console.log("Carol é a mais nova");
} else if (murilo < carol && murilo < baeta){
    console.log("Murilo é o mais novo")
} else if (baeta < carol && baeta < murilo){
    console.log("Baêta é o mais novo");
} else {
    console.log("Não é possível determinar o mais novo");
} */