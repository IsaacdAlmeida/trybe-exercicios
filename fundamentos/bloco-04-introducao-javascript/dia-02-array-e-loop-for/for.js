let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++){
    console.log(groceryList[index]);
}

// entendendo o laço for
// na primeira declaração eu seto o contador
// na segunda eu declaro uma condição e o laço executa o bloco de código, caso seja true
// quando o bloco de código é executado eu incremento o contador
// o laço volta para a condição e verifica se é verdadeira

for (let lista of groceryList) {
    console.log(lista);
}

//o for of me permite iterar os valores de arrays e etc. conseguindo retornar cada valor

//Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nomesIndividuais of names) {
    console.log(nomesIndividuais);
}