//um algoritmo que retorne o fatorial de 10.

//fatorial de 10 = 10 * 9 * 8 * 7
// x = x * (x-1) * (x-2) ... 

/* let fatorial = 10;
let resultadoFatorial = fatorial;

for (let index = 1; index < fatorial; index += 1){
    resultadoFatorial *= index;
}

console.log(resultadoFatorial);
 */

//


//um algoritimo que invertta uma palavra

//primeiro passo - pegar a ultima letra da palavra - o index pode ser o comprimento do array
//segundo passo - inserir a letra numa nova variável
//terceiro - exibir a variável

/* let palavra = "planeta";
let palavraInvertida = "";

for (let index = palavra.length - 1; index >=0; index -= 1){  //nesse caso o index é o comprimento do array, a condição é que o index seja maior ou igual a 0, toda vez terá um decremento
    palavraInvertida += palavra[index]; //o novo valor de palavrainvertida vai ser cada palavra retirada da última posição do index
}

console.log (palavraInvertida); */

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];


for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}

console.log(maiorPalavra) */

//número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
/* 
numero = [];

for (let index = 1; index <= 50; index += 1){
    numeroPrimo = true;

}
 */