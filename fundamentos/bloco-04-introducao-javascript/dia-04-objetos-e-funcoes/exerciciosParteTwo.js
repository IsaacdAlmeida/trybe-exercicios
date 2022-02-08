//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


function palindromoCheck(palavra) {
    let dividePalavra = palavra.split("")
    let palavraReversa = dividePalavra.reverse().join("")
    if (palavra === palavraReversa){
        return true;
    } else {
        return false;
    }
    
}
(palindromoCheck("natan"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function valueOfIndex(integerArray) {
    let biggestIndex = 0;
    for (let indice in integerArray){
        if (integerArray[biggestIndex] < integerArray[indice]){
            biggestIndex = indice;
        }
    }
    return biggestIndex;
}

(valueOfIndex([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function mostCharacterName (arrayDeNomes){
    let maiorNome = 

}