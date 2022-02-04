/*
02 - Contar até 10
Maria está aprendendo lógica de programação e recebeu o seguinte código:
  let limit = 10
	let accumulator = 1;
	while(contador <= limit){
		accumulator = accumulator + 1;
}
Considerando a mesma lógica, escreva um algoritmo que irá somar todos números de 1 até o limite usando o For em vez de while e o retorne.
*/

/* let limit = 10;
let accumulator = 1;

for (let index = 0; index < limit; index += 1){
        accumulator += index;
    }
  
console.log(accumulator); */

/*
06 - Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------
*/

/* let arrayImpar = [];


for (let index = 1; index <= 50; index += 1){
    if(index%2 !== 0){
    arrayImpar.push(index);
    }
}

let stringArray = arrayImpar.toString();

console.log(stringArray); */

/*
07 - Onde está o elemento?
Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.
Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------
*/